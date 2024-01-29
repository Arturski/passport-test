import React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/react';
import { imxlink } from '../helpers/ImmutableFunctions';
import { OrderV3 } from '@imtbl/core-sdk';
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { useMarketContext, MarketContextType } from '../context/MarketContext';

const BuyWidget2: React.FC<{ order: OrderV3 }> = ({ order }) => {
  const marketContext = useMarketContext();
  const { walletState }: MarketContextType = marketContext!;

  const handleLinkBuy = async () => {
    const order_id: string = String(order.order_id);
    const response = await imxlink.buy({ orderIds: [order_id] });
    console.log(response);
  };

  const handlePassportBuy = async () => {
    console.log('passport buy' + JSON.stringify(order));
  };

  // const handlePassportOffer = async () => {
  //   console.log('passport offer');
  // };

  const handleLinkOffer = async () => {
    // const response = await imxlink.makeOffer({ tokenId: order.token_id });
    console.log('Link offer' + JSON.stringify(walletState));
  };

  const renderButtons = () => {
    if (!walletState.link && !walletState.passport) {
      return (
        <Flex w={'100%'} alignItems={'center'} height={'100%'}>
          <Heading ml={2} as='h3' size={'sm'}>Connect Wallet</Heading>
        </Flex>
      );
    }

    if (walletState.passport) {
      return (
        <Button onClick={handlePassportBuy} mt={1} w={'100%'} size={'2xs'} textAlign={'center'}>
          <GiPriceTag />
          <Heading ml={2} as='h4' size={'xs'}>Buy with Passport</Heading>
        </Button>
      );
    }

    return (
      <>
        <Button onClick={handleLinkBuy} mt={1} w={'100%'} size={'2xs'} textAlign={'center'}>
          <GiPriceTag />
          <Heading ml={2} as='h4' size={'xs'}>Buy</Heading>
        </Button>
        <Button onClick={handleLinkOffer} mt={1} w={'100%'} size={'2xs'} textAlign={'center'}>
          <FaHandHoldingUsd />
          <Heading ml={2} as='h4' size={'xs'}>Offer</Heading>
        </Button>
      </>
    );
  };

  return (
    <Flex direction={'column'} alignItems="center" justifyContent="flex-end" width={'100%'}>
      {renderButtons()}
    </Flex>
  );
};

export default BuyWidget2;
