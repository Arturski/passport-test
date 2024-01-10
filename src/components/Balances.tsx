import React from 'react';
import { Box, Tooltip, Text, useColorModeValue, SimpleGrid, Flex } from '@chakra-ui/react';
import { CurrencyData, CurrencyDataInt, bigNumberToDecimal } from '../helpers/CurrencyData';

interface Balance {
  token_address: string;
  symbol: string;
  balance: string;
  preparing_withdrawal: string;
  withdrawable: string;
}

interface BalancesProps {
  balances: Balance[]; // Correctly typed as a prop
}

const Balances: React.FC<BalancesProps> = ({ balances }) => {
  const bg = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('gray.800', 'white');

  const getCurrencyIcon = (symbol: string): string | undefined => {
    const currency = CurrencyData.find((currency: CurrencyDataInt) => currency.symbol === symbol);
    return currency?.image_url;
  };

  const getDecimals = (token_address: string): number => {
    const currency = CurrencyData.find((currency: CurrencyDataInt) => currency.token_address === token_address);
    return currency ? parseInt(currency.decimals, 10) : 18; // Defaulting to 18 if not found
  };

  return (
    <Box p={1} borderRadius="sm" boxShadow="lg">
      <SimpleGrid columns={1} spacing={1} borderRadius={'sm'}>
        {balances.map((balance: Balance) => (
          <Tooltip
            key={balance.token_address}
            label={
              <>
                <Text>
                  Pending Withdrawal: <span style={{ color: 'grey' }}>{bigNumberToDecimal(balance.preparing_withdrawal, String(getDecimals(balance.token_address)))}</span>
                </Text>
                <Text>
                  Withdrawable: <span style={{ color: 'green' }}>{bigNumberToDecimal(balance.withdrawable, String(getDecimals(balance.token_address)))}</span>
                </Text>
              </>
            }
            bg={bg}
            color={color}
          >
            <Flex align="center" fontSize={12}>
              {getCurrencyIcon(balance.symbol) && (
                <img src={getCurrencyIcon(balance.symbol)} alt={balance.symbol} width={24} height={24} />
              )}
              <Text m={1}>
                {balance.symbol}: {bigNumberToDecimal(balance.balance, String(getDecimals(balance.token_address)))}
              </Text>
            </Flex>
          </Tooltip>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Balances;
