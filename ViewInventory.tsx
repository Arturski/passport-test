import { useState, useEffect} from 'react';
import Balances from '../components/Balances';
import CardMicro from '../components/CardMicro';
import WalletHistory from '../components/WalletHistory';
import {
  Box,
  Text,
  WrapItem,
  SimpleGrid,
  Flex,
  Select,
  Button,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spinner,
  Heading
} from '@chakra-ui/react';
import ActionTransfers from '../components/ActionTransfers';
import ActionWithdrawals from '../components/ActionWithdrawals';
import ActionDeposits from '../components/ActionDeposits';
import ActionSell from '../components/ActionSell';
import { AssetWithOrders } from '@imtbl/core-sdk';
import { fetchUserAssets, fetchBalances } from '../helpers/ImmutableFunctions';

interface ViewInventoryProps {
  connectedAddress: string;
}

interface Balance {
  token_address: string;
  symbol: string;
  balance: string;
  preparing_withdrawal: string;
  withdrawable: string;
}

export default function ViewInventory({ connectedAddress }: ViewInventoryProps) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<AssetWithOrders[] | null>(null);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedItemsDetails, setSelectedItemsDetails] = useState<
    { token_id: string; token_address: string }[]
  >([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [balances, setBalances] = useState<Balance[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);



  useEffect(() => {
    const fetchData = async () => {
      if (connectedAddress) {
        setLoading(true);
        try {
          const userAssets = await fetchUserAssets(connectedAddress);
          setItems(userAssets as AssetWithOrders[]);
        } catch (error) {
          console.error('Error fetching user assets:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [connectedAddress]);

  useEffect(() => {
    const fetchAndSetBalances = async () => {
      if (connectedAddress) {
        let newBalances = await fetchBalances(connectedAddress);
        if (newBalances) {
          setBalances(newBalances.result);
        }
      }
    };

    fetchAndSetBalances();
  }, [connectedAddress]);


  const collections = Array.from(new Set(items?.map((item) => item.collection.name)))!;

  const filteredItems = selectedCollection
    ? items?.filter((item) => item.collection.name === selectedCollection)
    : items;

  const handleSelectAll = () => {
    if (filteredItems && filteredItems.length > 0) {
      if (selectedItemsDetails.length === filteredItems.length) {
        setSelectedItemsDetails([]); // Deselect all items
      } else {
        const allItemDetails = filteredItems.map((item) => ({
          token_id: item.token_id,
          token_address: item.token_address,
        }));
        setSelectedItemsDetails(allItemDetails); // Select all filtered items
      }
      setIsCheckedAll(!isCheckedAll);
    }
  };

  const handleCardSelect = (assetId: string, token_address: string) => {
    setSelectedItemsDetails((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];

      const itemIndex = updatedSelectedItems.findIndex(
        (item) => item.token_id === assetId && item.token_address === token_address
      );

      if (itemIndex === -1) {
        updatedSelectedItems.push({ token_id: assetId, token_address });
      } else {
        updatedSelectedItems.splice(itemIndex, 1);
      }

      return updatedSelectedItems;
    });
  };

  return (
    <Box width="100%">
      <Tabs
        isFitted
        variant="unstyled"
        index={selectedTab}
        onChange={(index) => setSelectedTab(index)}
      >
        <TabList>
          <Tab
            value={0}
            borderBottomRadius="0"
            border="0"
            _selected={{
              color: 'white',
              bg: 'gray.800',
              borderBottomRadius: '0',
              border: '0',
              outline: 'none',
            }}
            _hover={{ border: '0' }}
            _focus={{
              color: 'white',
              bg: 'gray.800',
              borderBottomRadius: '0',
              border: '0px',
              outline: 'none',
            }}
          >
            Inventory
          </Tab>
          <Tab
            value={1}
            border="0"
            borderBottomRadius="0"
            _selected={{
              color: 'white',
              bg: 'gray.800',
              borderBottomRadius: '0',
              border: '0',
              outline: 'none',
            }}
            _hover={{ border: '0' }}
            _focus={{
              color: 'white',
              bg: 'gray.800',
              borderBottomRadius: '0',
              border: '0',
              outline: 'none',
            }}
          >
            Transaction History
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel bg={'gray.800'}>
            {selectedTab === 0 && (
              <Box width="100%" mb={4}>
                {loading ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    height="100vh"
                  >
                    <Spinner size={'xl'} />
                  </Box>
                ) : connectedAddress ? (
                  <Box width="100%" mb={4}>
                    <Box width="100%">
                      <SimpleGrid columns={2}>
                        {balances.length > 0 ? (
                          <Balances balances={balances} />
                        ) : (
                          <Flex w={'100%'} >
                            <Heading as={'h5'} size={'xs'}>No balances yet :(</Heading>
                          </Flex>
                        )}
                        <StatGroup borderRadius="sm" padding={0}>
                          <Box>
                            <Stat display={'block'}>
                              <StatLabel>NFTs</StatLabel>
                              <StatNumber>{items?.length}</StatNumber>
                            </Stat>
                          </Box>
                          <Box>
                            <Stat display={'block'}>
                              <StatLabel>Collections</StatLabel>
                              <StatNumber>{collections?.length | 0}</StatNumber>
                            </Stat>
                          </Box>
                        </StatGroup>
                      </SimpleGrid>
                    </Box>
                    <Box borderRadius="lg" width={'100%'}>
                      <Flex
                        justify="start"
                        p={2}
                        border="1px"
                        borderColor="gray.300"
                        borderRadius="md"
                        bg="transparent"
                        width={'100%'}
                      >
                        <Box width={'20%'}>
                          <Button
                            size={'xs'}
                            onClick={handleSelectAll}
                            ml={2}
                            width={'90%'}
                          >
                            {isCheckedAll ? 'Deselect All' : 'Select All'}
                          </Button>
                        </Box>
                        <Select
                          size={'xs'}
                          value={selectedCollection}
                          onChange={(e) => setSelectedCollection(e.target.value)}
                          ml={2}
                          width={'20%'}
                        >
                          <option value="">all</option>
                          {collections.map((collection) => (
                            <option key={collection} value={collection}>
                              {collection}
                            </option>
                          ))}
                        </Select>

                        <ActionTransfers
                          assets={selectedItemsDetails}
                          walletBalances={balances}
                        />
                        <ActionDeposits ethereumAddress={connectedAddress} />
                        <ActionWithdrawals
                          assets={selectedItemsDetails}
                          walletBalances={balances}
                        />
                        <ActionSell assets={selectedItemsDetails} />
                      </Flex>
                    </Box>
                    <Box borderRadius="lg" boxShadow="lg" width={'100%'} >
                      <SimpleGrid columns={6}>
                        {filteredItems && filteredItems.length > 0 ? (
                          filteredItems.map((item: AssetWithOrders) => (
                            <WrapItem p={0} key={`${item.token_id}-${item.token_address}`}>
                              <CardMicro
                                asset={item}
                                selected={selectedItemsDetails.some(
                                  (selectedItem) =>
                                    selectedItem.token_id === item.token_id &&
                                    selectedItem.token_address === item.token_address
                                )}
                                onSelect={() => handleCardSelect(item.token_id, item.token_address)}
                              />
                            </WrapItem>
                          ))
                        ) : (
                          <Flex w={'100%'} justifyContent="center" mt={2}>
                            <Heading as={'h5'} size={'xs'}>No NFTs yet :( </Heading>
                          </Flex>
                        )}
                      </SimpleGrid>

                    </Box>
                  </Box>
                ) : (
                  <Flex justify="center" mb={4}>
                    <Text fontSize="md" fontWeight="bold">
                      Connect Wallet
                    </Text>
                  </Flex>
                )}
              </Box>
            )}
          </TabPanel>
          <TabPanel bg={'gray.800'}>
            {selectedTab === 1 && (
              <Box width="100%" mb={4}>
                <Box borderRadius="lg" boxShadow="lg" width="100%">
                  <Flex
                    justify="center"
                    p={2}
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    bg="transparent"
                  >
                    <WalletHistory address={connectedAddress} />
                  </Flex>
                </Box>
              </Box>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
