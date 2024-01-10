import React, { useEffect, useCallback } from 'react';
import { Box, IconButton, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useColorModeValue, useClipboard, Button, useToast } from '@chakra-ui/react';
import Card from '../components/Card';
import { useMarketContext, MarketContextType } from '../context/MarketContext';
import { DrawerContext } from '../context/DrawerContext';
import { fetchOrders } from '../helpers/ImmutableFunctions';
import { OrdersApiListOrdersV3Request, OrderV3 } from '@imtbl/core-sdk';
import ViewInventory from './ViewInventory';
import { getCryptoExchangeRates } from '../helpers/CurrencyData';
import { FaCopy } from 'react-icons/fa'; // Make sure to install this icon library
import { CheckIcon } from '@chakra-ui/icons';
// import { imxlink } from '../helpers/ImmutableFunctions';

const ViewGallery: React.FC = () => {
  const [orders, setOrders] = React.useState<OrderV3[]>();
  const { isWalletOpen, onWalletClose, wallet } = React.useContext(DrawerContext);
  const {
    collectionAddress,
    tokenName,
    currency,
    currencyType,
    minSell,
    maxSell,
    setFxRate,
    fxRate,
    metadata,
    walletState,
    // setWalletState
  } = useMarketContext() as MarketContextType;


  const { hasCopied, onCopy } = useClipboard(walletState.link || '');
  const toast = useToast();
  
  const handleCopy = useCallback(() => {
    onCopy();
    toast({
      title: "Address Copied",
      description: "Wallet address has been copied to clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }, [onCopy, toast]);

  const handleChange = async (walletType: 'passport' | 'link') => {
    if (walletType === 'link') {
      // Clear the current state first
      console.log('handle change password');
      // setWalletState(prevState => ({ ...prevState, link: null }));
  
      // try {
      //   // Wait for the setup to complete and then update the state
      //   const response = await imxlink.setup({});
      //   setWalletState(prevState => ({ ...prevState, link: response.address }));
      // } catch (error) {
      //   console.error("Error setting up link wallet:", error);
      //   // Handle the error appropriately
      // }
  
      onWalletClose();
    } else if (walletType === 'passport') {
      // Dummy change for passport wallet
      console.log('Dummy change for passport wallet');
    }
  };
  
  

  useEffect(() => {
    const getExchangeRates = async () => {
      try {
        const rates = await getCryptoExchangeRates();
        setFxRate(rates);
        // Store the rates in context or state as needed
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    getExchangeRates();
  }, []);

  // Fetch orders on specific parameters
  useEffect(() => {
    const initialParams: OrdersApiListOrdersV3Request = {
      pageSize: 45,
      orderBy: 'updated_at',
      direction: 'desc',
      status: 'active',
      sellTokenType: 'ERC721',
    };

    const fetchOrdersWithParams = async () => {
      const params: OrdersApiListOrdersV3Request = {
        ...initialParams,
        ...(collectionAddress ? { sellTokenAddress: collectionAddress } : null),
        ...(tokenName ? { sellTokenName: tokenName } : null),
        ...(currency ? { buyTokenAddress: currency } : null),
        ...(currencyType ? { buyTokenType: currencyType } : null),
        ...(minSell !== '' ? { buyMinQuantity: minSell } : null),
        ...(maxSell !== '' ? { buyMaxQuantity: maxSell } : null),
        ...(metadata ? { sellMetadata: metadata } : null),
      };

      const response = await fetchOrders(params);

      if (response && response.result) {
        setOrders(response.result);
      } else {
        setOrders([]);
      }
    };

    fetchOrdersWithParams();
  }, [collectionAddress, tokenName, currency, currencyType, minSell, maxSell, metadata]);

  useEffect(() => {
    if (walletState.link || walletState.passport) {
      // Logic to update the wallet data in the drawer, if needed
    }
  }, [walletState.link, walletState.passport]);

  return (
    <Box position="relative" overflow={'visible'}>
      <Box w="100%" bg={useColorModeValue('gray.700', 'gray.100')} sx={{ columnCount: [1, 2, 3, 4, 5, 6] }}>
        {orders?.map((order, index) => {
          const orderTokenAddress = order.buy?.data?.token_address || 'ETH';
          const matchingRate = fxRate?.[orderTokenAddress];
          const exchangeRate = matchingRate ? matchingRate.usd : 0;

          return (
            <Card
              key={index}
              order={order}
              link
              passport={false}
              exchangeRate={exchangeRate} // USD rate
            />
          );
        })}
      </Box>

      <Drawer placement="right" size="xl" isOpen={isWalletOpen} onClose={onWalletClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={5} display="flex" alignItems="center" justifyContent="left" bg={'gray.900'} fontSize={16}>
            <Text fontStyle={'monospace'} fontSize={16}>
              Wallet: {wallet.name ? wallet.name : 'Unknown'} - {wallet.address}
            </Text>
            <IconButton
              ml={2}
              aria-label="Copy wallet address"
              icon={hasCopied ? <CheckIcon /> : <FaCopy />}
              bg={'gray.700'}
              color="whiteAlpha.700"
              size={'xs'}
              onClick={handleCopy}
            />
            {wallet.address && (
              <Button ml={2} size="xs" onClick={() => handleChange(wallet.name as 'passport' | 'link')}>
                Change Wallet
              </Button>
            )}
          </DrawerHeader>
          <DrawerBody bg={'gray.600'}>
            <ViewInventory connectedAddress={walletState.link || walletState.passport || ''} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ViewGallery;
