import React from 'react';
import { Box, Flex, List, ListItem, Image, Heading } from '@chakra-ui/react';
import { getImageUrlFromTokenAddress, bigNumberToDecimal } from '../helpers/CurrencyData';
import BuyWidget2 from './BuyWidget2';
import { OrderV3, OrderFeeInfo } from '@imtbl/core-sdk';

interface OrderDetailsProps {
  order: OrderV3;
  dollarValue: string | null;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, dollarValue }) => {
  const makerFees: OrderFeeInfo[] | undefined = order.maker_fees?.fees;
  const takerFees: OrderFeeInfo[] | undefined = order.taker_fees?.fees;

  if (!makerFees || !takerFees) {
    // Handle the case where fees are undefined
    return null; // or provide a default value
  }

  const quantityWithFeesDec = bigNumberToDecimal(order.taker_fees?.quantity_with_fees || '0', String(order.buy.data.decimals) || '0');
  const quantityDec = bigNumberToDecimal(order.buy.data.quantity, String(order.buy.data.decimals) || '0');
  const url = getImageUrlFromTokenAddress(order.buy.data.token_address || '');

  // Calculate cumulative fees and percentages
  const feesWithPercentages = takerFees.map((fee) => {
    const feeAmount = bigNumberToDecimal(fee.amount || '0', String(order.buy.data.decimals) || '0');
    return {
      type: fee.type,
      amount: feeAmount,
      percentage: ((Number(feeAmount) / Number(quantityDec)) * 100).toFixed(2),
    };
  });

  return (
    <Box bg={'gray.800'} height={'100%'} width={'100%'} position="relative">
      {/* BuyWidget in the bottom left */}
      <Flex position="absolute" bottom="0" left="0" alignItems={'end'} width={'50%'} p={2}>
        <BuyWidget2 order={order} />
      </Flex>

      {/* List of fees to the bottom right */}
      <Flex position="absolute" bottom="0" right="0" alignItems={'end'} p={2}>
        <List fontSize={'2xs'}>
          {feesWithPercentages.map((fee, index) => (
            <ListItem key={index}>
              {fee.type}: {Number(fee.amount).toFixed(7)} ({fee.percentage}%)
            </ListItem>
          ))}
        </List>
      </Flex>

      {/* Prices in the top left */}
      <Flex flexDirection="column" position="absolute" top="0" left="0" height={'50px'} alignItems="left" p={2}>
        <Flex alignItems="left">
          <Image src={url} w="24px" h="24px" ml={2} mt={2} />
          <Heading as='h3' size='lg'>
            {quantityWithFeesDec}
          </Heading>
        </Flex>
        <Flex ml={3}>
          <Heading as='h5' size='sm'>
            $ {dollarValue}
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OrderDetails;
