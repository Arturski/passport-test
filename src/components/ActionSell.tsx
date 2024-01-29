import React, { useState, 
    useEffect
 } from 'react';
import {
    Input,
    Button,
    Flex,
    Box,
    Text,
    Select,
    Popover,
    PopoverBody,
    PopoverHeader,
    PopoverContent,
    PopoverCloseButton,
    PopoverTrigger,
    PopoverArrow,
    Icon,
} from '@chakra-ui/react';
import { FaSackDollar } from 'react-icons/fa6';
import { EthAddress, PositiveNumberString } from '@imtbl/imx-sdk';
import { imxlink } from '../helpers/ImmutableFunctions';
import { CurrencyData } from '../helpers/CurrencyData';

interface Asset {
    token_id: string;
    token_address: string;
}

interface ActionSellProps {
    assets: Asset[] | null;
}

interface LinkOrder {
    tokenId: string;
    tokenAddress: EthAddress;
    amount: PositiveNumberString;  // Ensure this is correct as per your type definitions
    currencyAddress?: string;  // Change to string if it can be a regular string
}

const ActionSell: React.FC<ActionSellProps> = ({ assets }) => {
    const [assetData, setAssetData] = useState<(LinkOrder | null)[]>([]);
    const [isSellPopoverOpen, setIsSellPopoverOpen] = useState(false);

    useEffect(() => {
        setAssetData(assets ? assets.map(() => null) : []);
    }, [assets]);

    const updateAssetData = (index: number, updatedData: Partial<LinkOrder>) => {
        const currentData = assetData[index] || { tokenId: assets![index].token_id, tokenAddress: assets![index].token_address as EthAddress };
        const newData = { ...currentData, ...updatedData };
        setAssetData(prev => prev.map((item, idx) => idx === index ? newData as LinkOrder : item));  // Cast newData as LinkOrder
    };

    const handleAmountChange = (index: number, amount: string) => {
        updateAssetData(index, { amount: amount as PositiveNumberString });
    };

    const handleCurrencyChange = (index: number, selectedCurrencySymbol: string) => {
        let currencyAddress: string | undefined = '';  // Declare as string or undefined
        if (selectedCurrencySymbol !== 'ETH') {
            const selectedCurrencyData = CurrencyData.find(currency => currency.symbol === selectedCurrencySymbol);
            currencyAddress = selectedCurrencyData ? selectedCurrencyData.token_address : undefined;
        }
        updateAssetData(index, { currencyAddress });
    };

    const handleSellConfirm = async () => {
        if (assetData.some(item => item === null || item.amount === '0')) {
            console.error('Please complete all selections before selling.');
            return;
        }

        console.log('Sell assets:', assetData);
        // Uncomment the below code to enable the actual sell process
        for (const order of assetData) {
            if (order) {
                const response = await imxlink.sell(order);
                console.log(response);
            }
        }
    };

    const handleSellPopoverOpen = () => setIsSellPopoverOpen(true);
    const handleSellPopoverClose = () => setIsSellPopoverOpen(false);

    return (
        <Box width={'20%'}>
            <Popover isOpen={isSellPopoverOpen} onClose={handleSellPopoverClose}>
                <PopoverTrigger>
                    <Button width={'90%'} size="xs" ml={2} onClick={handleSellPopoverOpen}>
                        <Icon height={'75%'} width={'40%'} as={FaSackDollar} />
                        Sell
                    </Button>
                </PopoverTrigger>
                <PopoverContent bg="gray.700" width={'400px'}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>
                        <Text fontSize={'xs'}>{assets?.length} assets</Text>
                        <Text fontSize={'2xs'}>Note: you will need to approve each asset separately</Text>
                    </PopoverHeader>
                    <PopoverBody>
                        {assets?.map((asset, index) => {
                            const assetDataEntry = assetData[index];
                            return (
                                <Flex alignItems="center" ml={2} key={index}>
                                    <Select
                                        value={assetDataEntry?.currencyAddress || (CurrencyData.some(currency => currency.symbol === 'ETH') ? 'ETH' : '')}
                                        onChange={(e) => handleCurrencyChange(index, (e.target as HTMLSelectElement).value)}
                                        size="xs"
                                        width="100px"
                                        mr={2}
                                    >
                                        <option value="" disabled>Select</option>
                                        {CurrencyData.map(currency => (
                                            <option key={currency.symbol} value={currency.symbol}>
                                                {currency.symbol}
                                            </option>
                                        ))}
                                    </Select>
                                    <Input
                                        type="number"
                                        value={assetDataEntry?.amount || ''}
                                        onChange={(e) => handleAmountChange(index, (e.target as HTMLInputElement).value)}
                                        placeholder="Amount"
                                        size="xs"
                                        width="80px"
                                        mr={2}
                                    />
                                    <Text fontSize="2xs" mr={2}>{asset.token_id}</Text>
                                </Flex>
                            );
                        })}
                        <Button size="xs" width="100%" mt={2} onClick={handleSellConfirm}>
                            Sell
                        </Button>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
};

export default ActionSell;
