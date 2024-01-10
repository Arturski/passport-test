import React, { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Spinner,
  Image,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
  Box,
} from '@chakra-ui/react';
import { fetchAssetDetail } from '../helpers/ImmutableFunctions';
import { Asset, OrderV3 } from '@imtbl/core-sdk';
import MetadataDisplay from '../components/MetadataDisplay';
import OrderDetails from '../components/OrderDetails';
import CompactOfferTable from '../components/OffersList';
import NFTData from '../components/NFTData';
import NFTHistory from '../components/NFTHistory';

interface NFTDetailProps {
  order: OrderV3;
  token_id: string | null;
  token_address: string | null;
  dollarValue: string | null;
}

const ViewOrderAsset: React.FC<NFTDetailProps> = ({
  order,
  token_id,
  token_address,
  dollarValue,
}) => {
  const [assetDetail, setAssetDetail] = useState<Asset | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const result = await fetchAssetDetail(token_address || '', token_id || '');
        setAssetDetail(result);
      } catch (error) {
        console.error('Error fetching asset details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAsset();
  }, [token_address, token_id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Grid
      templateAreas={`
        "price data"
        "image tabs"
      `}
      templateRows={['1fr', '150px']}
      templateColumns={['60%', '40%']}
      h="100vh"
    >
      <GridItem area="price">
        <OrderDetails order={order} dollarValue={dollarValue || '0'} />
      </GridItem>
      <GridItem area="data" p={3} bg={'gray.800'}>
        <Box width={'100%'} height={'100%'} pl={4}>
          <NFTData
            order_id={String(order.order_id)}
            owner={assetDetail?.user || ''}
            token_id={assetDetail?.token_id || ''}
            token_address={assetDetail?.token_address || ''}
            nft_created={assetDetail?.created_at || ''}
            order_created={order.timestamp || ''}
          />
        </Box>
      </GridItem>
      <GridItem area="image" p={3} position="relative" boxShadow="inset 4px 4px 32px rgba(54, 54, 54, 5)">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="50%"
            transform="translateX(-50%)"
            width={'100%'}
          >
            <Image src={assetDetail?.image_url!} alt={assetDetail?.name || ''} objectFit="cover" />
          </Box>
        </Box>
      </GridItem>

      <GridItem area="tabs" p={3} bg={'gray.800'}>
        <Tabs isFitted variant="enclosed" defaultIndex={0}>
          <TabList>
            <Tab
              value={0}
              tabIndex={0}
              borderRadius="0"
              border="0"
              color={'whiteAlpha.800'}
              _selected={{ color: 'white', bg: 'gray.800', border: '1', outline: 'none' }}
              _hover={{ border: '0' }}
              _focus={{ color: 'white', bg: 'gray.800', border: '1', outline: 'none' }}
            >
              Metadata
            </Tab>
            <Tab
              value={1}
              tabIndex={1}
              borderRadius="0"
              border="0"
              _selected={{ color: 'white', bg: 'gray.800', border: '1', outline: 'none' }}
              _hover={{ border: '0' }}
              _focus={{ color: 'white', bg: 'gray.800', border: '1', outline: 'none' }}
            >
              Offers
            </Tab>
            <Tab
              value={2}
              tabIndex={2}
              borderRadius="0"
              border="0"
              _selected={{ color: 'white', bg: 'gray.800', border: '1', outline: 'none' }}
              _hover={{ border: '0' }}
              _focus={{ color: 'white', bg: 'gray.800', border: '1', outline: 'none' }}
            >
              History
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel bg="gray.800">
              <MetadataDisplay metadata={assetDetail?.metadata || {}} />
            </TabPanel>
            <TabPanel bg="gray.800">
              <CompactOfferTable tokenAddress={assetDetail?.token_address || '0'} tokenId={assetDetail?.token_id || '0'} />
            </TabPanel>
            <TabPanel bg="gray.800">
              <NFTHistory token_address={assetDetail?.token_address || ''  } token_id={assetDetail?.token_id || '' } />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  );
};

export default ViewOrderAsset;
