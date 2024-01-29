import React, { useState, useEffect } from 'react';
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
    InputGroup,
    Badge,
    FormControl,
    Tooltip
} from '@chakra-ui/react';
import { BiTransfer } from 'react-icons/bi';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { ERC20TokenType, ETHTokenType, ERC721TokenType } from '@imtbl/imx-sdk';
import { validateAddress } from '../helpers/ImmutableFunctions';
import { imxlink } from '../helpers/ImmutableFunctions';
import {
    getDecimalsFromSymbol,
    bigNumberToDecimal,
    // decimalToBigNumber,
} from '../helpers/CurrencyData';

interface Asset {
    symbol: string;
    balance: string;
}

interface ActionTransfersProps {
    assets: any[] | null;
    walletBalances: Asset[] | null;
}

const ActionTransfers: React.FC<ActionTransfersProps> = ({
    assets,
    walletBalances,
}) => {
    const [receiverAddress, setReceiverAddress] = useState('');
    const [symbol, setSymbol] = useState('');
    const [amountDec, setAmountDec] = useState('0');
    // const [amountBig, setAmountBig] = useState('0');
    const [decimals, setDecimals] = useState('0');
    const [isTransferPopoverOpen, setIsTransferPopoverOpen] = useState(false);
    const [transferType, setTransferType] = useState('nft');

    const handleReceiverAddressChange = async (inputAddress: string) => {
        if (inputAddress.length === 42) {
          if (await validateAddress(inputAddress)) {
            setReceiverAddress(inputAddress);
          }
        }
      };
    const handleAmountChange = async (amount: string) => {
        try {
            setAmountDec(amount);
            // setAmountBig(decimalToBigNumber(amount, Number(decimals)));
        } catch (error) {
            console.error('Error converting amount:', error);
        }
    };

    const handleTransferConfirm = async () => {
        if (transferType === 'nft') {
            linkNFTTransfer(assets);
        } else if (transferType === 'currency') {
            linkCoinTransfer(amountDec, symbol, receiverAddress);
        }
        console.log('transfer coin');
    };

    const handleMaxButtonClick = (selectedSymbol: string) => {
        const balance = walletBalances?.find((asset) => asset.symbol === selectedSymbol);
        if (balance) {
            // setAmountBig(balance.balance);
            setAmountDec(bigNumberToDecimal(balance.balance, decimals));
        }
    };
    const handleBadgeClick = () => {
        setReceiverAddress('0xb512d1426219d0cbceab18efd2c29465f4b6c0bb');
    };

    const handleTransferPopoverOpen = () => {
        setIsTransferPopoverOpen(true);
    };

    const handleTransferPopoverClose = () => {
        setIsTransferPopoverOpen(false);
    };

    const handleCurrencyChange = (value: string) => {
        const newDecimals = value === 'ETH' ? '18' : getDecimalsFromSymbol(value) || '0';
        setDecimals(newDecimals);
        setSymbol(value);
    };

    const linkCoinTransfer = async (amount: string, symbol: string, token_address: string | null) => {
        try {
            let transferRequests = [];

            if (token_address) {
                // Use ERC20TokenType when token_address is provided
                transferRequests.push({
                    amount: amount,
                    symbol: symbol,
                    type: ERC20TokenType.ERC20,
                    tokenAddress: token_address,
                    toAddress: receiverAddress,
                });
            } else {
                // Use ETHTokenType when token_address is not provided
                transferRequests.push({
                    amount: amount,
                    type: ETHTokenType.ETH,
                    toAddress: receiverAddress,
                });
            }

            const transferResponsePayload = await imxlink.transfer(transferRequests);

            console.log(transferResponsePayload);
            // Handle the response as needed
        } catch (error) {
            console.error('Address validation error:', error);
            return false;
        }
    };

    const linkNFTTransfer = async (assets: any) => {
        try {
            const transferRequests = assets.map((asset: any) => ({
                tokenId: asset.token_id,
                type: ERC721TokenType.ERC721,
                tokenAddress: asset.token_address,
                toAddress: receiverAddress,
            }));

            const transferResponsePayload = await imxlink.batchNftTransfer(transferRequests);
            console.log(transferResponsePayload);
            // Handle the response as needed
        } catch (error) {
            console.error('Address validation error:', error);
            return false;
        }
    };


      useEffect(() => {
        console.log('balances: ' + JSON.stringify(walletBalances));
        console.log('assets: ' + JSON.stringify(assets));
      }, [assets, walletBalances]);

    return (
        <Box width={'20%'}>
            <Popover isOpen={isTransferPopoverOpen} onClose={handleTransferPopoverClose}>
                <PopoverTrigger>
                    <Button width={'90%'} size="xs" ml={2} onClick={handleTransferPopoverOpen}>
                        <Icon height={'75%'} width={'40%'} as={BiTransfer} />
                        Transfer
                    </Button>
                </PopoverTrigger>
                <PopoverContent bg="gray.700" width={'400px'}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>
                        <Flex alignItems="center" fontSize="xs" fontWeight="bold">
                            Transfer
                            <Select
                                size="xs"
                                ml={2}
                                width="100px"
                                value={transferType}
                                onChange={(event) => setTransferType(event.target.value)}
                            >
                                <option value="nft">NFTs</option>
                                <option value="currency">Coins</option>
                            </Select>
                        </Flex>
                    </PopoverHeader>
                    <PopoverBody>
                        {(transferType === 'nft' && assets && assets.length > 0) ||
                            (transferType === 'currency' && walletBalances && walletBalances.length > 0) ? (
                            <>
                                {transferType === 'nft' && assets && assets.length > 0 && (
                                    <Text fontSize="md">{assets.length} assets selected for transfer</Text>
                                )}
                                {transferType === 'currency' && walletBalances && walletBalances.length > 0 && (
                                    <Flex alignItems="center" ml={2}>
                                        <Select
                                            value={symbol}
                                            onChange={(e) => handleCurrencyChange(e.target.value)}
                                            size="xs"
                                            width="120px"
                                            mr={2}
                                            ml={-2}
                                        >
                                            <option value="" disabled>
                                                select
                                            </option>
                                            {walletBalances
                                                ?.filter((asset) => asset.balance !== '0')
                                                ?.map((asset) => (
                                                    <option key={asset.symbol} value={asset.symbol}>
                                                        {asset.symbol}
                                                    </option>
                                                ))}
                                        </Select>
                                        <InputGroup size="xs" width="100%">
                                            <Input
                                                type="number"
                                                value={amountDec}
                                                onChange={(e) => handleAmountChange(e.target.value)}
                                                placeholder="Amount"
                                                size="xs"
                                                width="120px"
                                                max={bigNumberToDecimal(walletBalances.find((asset) => asset.symbol === symbol)?.balance || '0', decimals)}
                                            />
                                            <Button ml={2} size="xs" onClick={() => handleMaxButtonClick(symbol)}>Max</Button>
                                        </InputGroup>
                                    </Flex>
                                )}

                                <Flex direction={'column'} alignItems="center" mt={2}>
                                    <FormControl width={'100%'}>
                                        <Input
                                            width={'75%'}
                                            type="text"
                                            fontSize={'2xs'}
                                            size={'xs'}
                                            value={receiverAddress}
                                            onChange={(e) => handleReceiverAddressChange(e.target.value)}
                                            placeholder="0x..address"
                                        />
                                        <Button width={'20%'} ml={2} onClick={() => handleTransferConfirm()} size="xs">Send</Button>
                                    </FormControl>
                                    <Flex alignItems={'start'} width={'100%'}>
                                        <Tooltip label={"Auto-fill connected wallet:"} fontSize='xs' placement='bottom'>
                                            <Badge fontSize='0.5em' mt={2} colorScheme='green' onClick={handleBadgeClick} cursor="pointer">
                                                <ArrowForwardIcon />Passport
                                            </Badge>
                                        </Tooltip>
                                    </Flex>

                                </Flex>
                            </>
                        ) : (
                            <Text fontSize="sm">
                                {transferType === 'nft' ? 'No assets selected for transfer' : 'No balances available for transfer'}
                            </Text>
                        )}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
};

export default ActionTransfers;
