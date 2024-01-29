import React, { useState, useEffect } from 'react';
import { Box, Spinner, Flex, Heading, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Image, Badge } from '@chakra-ui/react';
import { OrderV3 } from '@imtbl/core-sdk';
import { bigNumberToDecimal } from '../helpers/CurrencyData';
import ViewOrderAsset from '../view/ViewOrderAsset';
import BuyWidget2 from './BuyWidget2';
import { useMarketContext, MarketContextType } from '../context/MarketContext';

const Card: React.FC<{
  order: OrderV3;
  exchangeRate: number;
  passport: boolean;
  link: boolean;
}> = ({ order, exchangeRate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const marketContext = useMarketContext();
  // Use non-null assertion (!) to tell TypeScript that marketContext is not undefined
  const { fxRate = {} }: MarketContextType = marketContext!;
  // Rest of your component remains unchanged...
  const [symbol, setSymbol] = useState<string | undefined>('');
  const [loadingTokenDetail, setLoadingTokenDetail] = useState(false);
  const [dollarValue, setDollarValue] = useState<number | null>(null);

  useEffect(() => {
    setLoadingTokenDetail(true);
    if (order.buy.data.token_address && fxRate) {
      let icon = fxRate[order.buy.data.token_address]?.image_url;
      setSymbol(icon);
    } else {
      setSymbol('https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--eth.svg');
    }

    const calculateDollarValue = () => {
      if (order.taker_fees && order.buy.data.decimals) {
        const quantityWithFees = bigNumberToDecimal(order.taker_fees.quantity_with_fees, String(order.buy.data.decimals));
        const calculatedValue = Number(quantityWithFees) * exchangeRate; // Calculate dollar value
        setDollarValue(calculatedValue);
      }
    };

    calculateDollarValue();
    setLoadingTokenDetail(false);
  }, [order.taker_fees, order.buy.data.decimals, exchangeRate, order.buy.data.token_address, fxRate]); // Adjust here

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const cardStyle: React.CSSProperties = {
    background: 'gray.700',
    borderRadius: 'md',
    marginBottom: 1,
    display: 'inline-block',
    breakInside: 'avoid',
    breakBefore: 'avoid',
    position: 'relative',
    cursor: 'pointer',
  };

  return (
    <Box style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered && (
        <Box position="absolute" top="0" left="0" right="0" background="rgba(0, 0, 0, 0.7)" display="flex" justifyContent="center" padding={1}>
          <Flex align="center">
            <Image src={order.sell.data.properties?.collection?.icon_url || 'https://placehold.co/20x20'} alt={order.sell.data.properties?.collection?.name} boxSize={6} />
            <Text ml={2} fontSize="14px">{order.sell.data.properties?.name}</Text>
          </Flex>
        </Box>
      )}

      <Image
        src={order.sell.data.properties?.image_url || 'https://placehold.co/200x200'}
        alt={order.sell.data.properties?.name}
        onClick={handleCardClick}
      />

      {isHovered && (
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          background="rgba(0, 0, 0, 0.7)"
          display="flex"
          justifyContent="space-between"
          minHeight={'75px'}
          overflow={'auto'}
        >
          <Flex alignItems="left" width={'30%'}>
            <Flex flexDirection="column" mb={2}>
              <Flex flexDirection="row" mb={2} mr="0.4rem" mt="0.2rem" ml={2}>
                <Image src={symbol} alt={order.sell.data.properties?.name} w="18px" h="18px" mt="0.2rem" mr={'0.2rem'} />
                <Heading ml={1} as={'h5'} size={'md'}>{bigNumberToDecimal(order.taker_fees?.quantity_with_fees || '', String(order.buy.data.decimals) || '')}</Heading>
              </Flex>
              <Heading as='h5' size='2xs' ml={2}>
                {dollarValue ? `$${dollarValue.toFixed(2)}` : '..'}
              </Heading>
            </Flex>
          </Flex>
          <Flex alignItems="end" justifyContent="flex-end" width={'60%'} mb={1} mr={1}>
            <BuyWidget2 order={order} />
          </Flex>
        </Box>
      )}

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={4}>{order.sell.data.properties?.name} - {order.sell.data.properties?.collection?.name}<Badge marginLeft={'5px'} variant='subtle' colorScheme='gray'># {order.sell.data.token_id}</Badge></DrawerHeader>
          <DrawerBody p={0}>
            {loadingTokenDetail ? <Spinner /> : <ViewOrderAsset dollarValue={dollarValue?.toFixed(2) || '0'} order={order} token_address={order.sell.data.token_address || ''} token_id={order.sell.data.token_id || ''} />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Card;
