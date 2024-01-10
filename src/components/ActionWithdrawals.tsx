import React, { useState } from 'react';
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
    Tooltip
} from '@chakra-ui/react';
import {
    getDecimalsFromSymbol,
    bigNumberToDecimal,
    decimalToBigNumber,
} from '../helpers/CurrencyData';
import { IoExitSharp } from "react-icons/io5";

interface Asset {
    symbol: string;
    balance: string;
}

interface ActionWithdrawalProps {
    assets: any[] | null;
    walletBalances: Asset[] | null;
}

const ActionWithdrawals: React.FC<ActionWithdrawalProps> = ({
    assets,
    walletBalances,
}) => {
    const [symbol, setSymbol] = useState('');
    const [amountDec, setAmountDec] = useState('0');
    const [amountBig, setAmountBig] = useState('0');
    const [decimals, setDecimals] = useState('0');
    const [isWithdrawalPopoverOpen, setIsWithdrawalPopoverOpen] = useState(false);
    const [WithdrawalType, setWithdrawalType] = useState('nft');

    const handleAmountChange = async (amount: string) => {
        try {
            setAmountDec(amount);
            setAmountBig(decimalToBigNumber(amount, decimals));
        } catch (error) {
            console.error('Error converting amount:', error);
        }
    };

    const handleWithdrawConfirm = async () => {
        try {
            console.log('Withdrawing ' + amountBig + ' dec ' + amountDec);
        } catch (error) {
            console.error('Error connecting to IMX:', error);
        }
    };

    const handleMaxButtonClick = (selectedSymbol: string) => {
        const balance = walletBalances?.find((asset) => asset.symbol === selectedSymbol);
        if (balance) {
            setAmountBig(balance.balance);
            setAmountDec(bigNumberToDecimal(balance.balance, decimals));
        }
    };

    const handleWithdrawalPopoverOpen = () => {
        setIsWithdrawalPopoverOpen(true);
    };

    const handleWithdrawalPopoverClose = () => {
        setIsWithdrawalPopoverOpen(false);
    };

    const handleCurrencyChange = (value: string) => {
        const newDecimals = value === 'ETH' ? '18' : getDecimalsFromSymbol(value) || '0';
        setDecimals(newDecimals);
        setSymbol(value);
    };

    return (
        <Box width={'20%'}>
            <Popover isOpen={isWithdrawalPopoverOpen} onClose={handleWithdrawalPopoverClose}>
                <PopoverTrigger>
                <Tooltip label="Under development" hasArrow>
                    <Button isDisabled={true} width={'90%'} size="xs" ml={2} onClick={handleWithdrawalPopoverOpen}>
                    <Icon height={'75%'} width={'40%'} as={IoExitSharp} />withdraw
                    </Button>
                </Tooltip>
                </PopoverTrigger>
                <PopoverContent bg="gray.700" width={'400px'}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>
                        <Flex alignItems="center" fontSize="xs" fontWeight="bold">
                            Withdraw
                            <Select
                                size="xs"
                                ml={2}
                                width="100px"
                                value={WithdrawalType}
                                onChange={(event) => setWithdrawalType(event.target.value)}
                            >
                                <option value="nft">NFTs</option>
                                <option value="currency">Coins</option>
                            </Select>
                        </Flex>
                    </PopoverHeader>
                    <PopoverBody>
                        {(WithdrawalType === 'nft' && assets && assets.length > 0) ||
                            (WithdrawalType === 'currency' && walletBalances && walletBalances.length > 0) ? (
                            <>
                                {WithdrawalType === 'nft' && assets && assets.length > 0 && (
                                    <Box>
                                        <Text fontSize="md">{assets.length} assets selected for withdrawl</Text>
                                        <Button ml={2} size="xs" onClick={() => handleWithdrawConfirm()}>
                                            Withdraw
                                        </Button>
                                    </Box>
                                )}
                                {WithdrawalType === 'currency' && walletBalances && walletBalances.length > 0 && (
                                    <Flex alignItems="center">
                                        <Select
                                            value={symbol}
                                            onChange={(e) => handleCurrencyChange(e.target.value)}
                                            size="xs"
                                            width="80px"
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
                                        <Input
                                            ml={2}
                                            type="number"
                                            value={amountDec}
                                            onChange={(e) => handleAmountChange(e.target.value)}
                                            placeholder="Amount"
                                            size="xs"
                                            width="150px"
                                            max={bigNumberToDecimal(
                                                walletBalances.find((asset) => asset.symbol === symbol)?.balance || '0', decimals)}
                                        />
                                        <Button ml={2} size="xs" onClick={() => handleMaxButtonClick(symbol)}>
                                            Max
                                        </Button>
                                        <Button ml={2} size="xs" onClick={() => handleWithdrawConfirm()}>
                                            Withdraw
                                        </Button>
                                    </Flex>
                                )}
                            </>
                        ) : (
                            <Text fontSize="sm">
                                {WithdrawalType === 'nft' ? 'No assets selected for Withdrawal' : 'No balances available for Withdrawal'}
                            </Text>
                        )}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
};

export default ActionWithdrawals;
