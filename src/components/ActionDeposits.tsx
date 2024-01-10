import React, { useState } from 'react';
import {
  // Input,
  Button,
  // Flex,
  // FormErrorMessage,
  Box,
  // Text,
  // Select,
  Popover,
  PopoverBody,
  PopoverHeader,
  PopoverContent,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverArrow,
  // IconButton,
  Icon,
  Tooltip
} from '@chakra-ui/react';
import { BiTransfer } from 'react-icons/bi';
// import { GiPassport } from 'react-icons/gi';
// import { ethers } from 'ethers';

interface ActionDepositsProps {
  ethereumAddress: string;
}

// interface TokenBalance {
//   tokenAddress: string;
//   balance: string;
// }

// interface WalletTokens {
//   erc20Tokens: TokenBalance[];
//   erc721Tokens: string[];
// }

// const INFURA_API_KEY = 'YOUR_INFURA_API_KEY'; // Replace with your Infura API key

// async function getProvider(): Promise<ethers.providers.JsonRpcProvider> {
//   const infuraUrl = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;
//   const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
//   return provider;
// }

// async function getWalletTokens(walletAddress: string): Promise<WalletTokens> {
//   const provider = await getProvider();
//   const erc20Tokens = await getERC20Tokens(walletAddress, provider);
//   const erc721Tokens = await getERC721Tokens(walletAddress, provider);

//   console.log('ERC20 Tokens:', erc20Tokens);
//   console.log('ERC721 Tokens:', erc721Tokens);

//   return { erc20Tokens, erc721Tokens };
// }

// async function getERC20Tokens(walletAddress: string, provider: ethers.providers.JsonRpcProvider): Promise<TokenBalance[]> {
//   // Replace with your logic to get the list of ERC20 tokens associated with the wallet
//   // For now, using a sample list of token addresses
//   const tokenAddresses = ['0xToken1', '0xToken2', '0xToken3'];

//   const balancesPromises = tokenAddresses.map(async (tokenAddress) => {
//     const erc20Contract = new ethers.Contract(tokenAddress, ['function balanceOf(address)'], provider);
//     const balance = await erc20Contract.balanceOf(walletAddress);
//     return { tokenAddress, balance: balance };
//   });

//   const balances = await Promise.all(balancesPromises);
//   return balances;
// }

// async function getERC721Tokens(walletAddress: string, provider: ethers.providers.JsonRpcProvider): Promise<string[]> {
//   // Replace with your logic to get the list of ERC721 tokens associated with the wallet
//   // For now, using a sample ERC721 contract address
//   const erc721ContractAddress = '0xYourERC721ContractAddress';
//   const erc721Contract = new ethers.Contract(erc721ContractAddress, ['function tokensOfOwner(address)'], provider);

//   // Replace with your logic to get the list of ERC721 tokens associated with the wallet
//   const tokens = await erc721Contract.tokensOfOwner(walletAddress);

//   return tokens.map((token) => token);
// }

const ActionDeposits: React.FC<ActionDepositsProps> = ({ ethereumAddress }) => {
  console.log(ethereumAddress);
  // const [receiverAddress, setReceiverAddress] = useState('');
  // const [symbol, setSymbol] = useState('');
  // const [amountDec, setAmountDec] = useState('0');
  // const [amountBig, setAmountBig] = useState('0');
  // const [decimals, setDecimals] = useState('0');
  const [isDepositPopoverOpen, setIsDepositPopoverOpen] = useState(false);
  // const [depositType, setDepositType] = useState<'nft' | 'currency'>('nft');
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (depositType === 'currency') {
  //         const { erc20Tokens, erc721Tokens } = await getWalletTokens(ethereumAddress);
  //         // Update state accordingly
  //         console.log('Fetched ERC20 tokens:', erc20Tokens);
  //         console.log('Fetched ERC721 tokens:', erc721Tokens);
  //       } else {
  //         // Handle ERC721-specific logic if needed
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [ethereumAddress, depositType]);

  // const handleAmountChange = async (amount: string) => {
  //   try {
  //     setAmountDec(amount);
  //     setAmountBig(decimalToBigNumber(amount, Number(decimals)));
  //   } catch (error) {
  //     console.error('Error converting amount:', error);
  //   }
  // };

  // const handleDepositConfirm = async () => {
  //   try {
  //     console.log('send ' + amountBig);
  //   } catch (error) {
  //     console.error('Error connecting to IMX:', error);
  //   }
  // };

  // const handleMaxButtonClick = (selectedSymbol: string) => {
  //   // Implementation for handling max button click
  // };

  const handleDepositPopoverOpen = () => {
    setIsDepositPopoverOpen(true);
  };

  const handleDepositPopoverClose = () => {
    setIsDepositPopoverOpen(false);
  };

  // const handleCurrencyChange = (value: string) => {
  //   const newDecimals = value === 'ETH' ? '18' : getDecimalsFromSymbol(value) || '0';
  //   setDecimals(newDecimals);
  //   setSymbol(value);
  // };

  // const fillAddress = () => {
  //   // Add implementation if needed
  // };

  // const handleBurnClick = () => {
  //   // Add implementation if needed
  // };

  return (
    <Box width={'20%'}>
      <Popover isOpen={isDepositPopoverOpen} onClose={handleDepositPopoverClose}>
        <PopoverTrigger>
          <Tooltip label="Under development" hasArrow>
            <Button isDisabled={true} width={'90%'} size="xs" ml={2} onClick={handleDepositPopoverOpen}>
              <Icon height={'75%'} width={'40%'} as={BiTransfer} />
              deposit
            </Button>
          </Tooltip>
        </PopoverTrigger>
        <PopoverContent bg="gray.700" width={'400px'}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            {/* <Flex alignItems="center" fontSize="xs" fontWeight="bold">
              Deposit
              <Select
                size="xs"
                ml={2}
                width="100px"
                value={depositType}
                onChange={(event) => setDepositType(event.target.value as 'nft' | 'currency')}
              >
                <option value="nft">NFTs</option>
                <option value="currency">Coins</option>
              </Select>
            </Flex> */}
          </PopoverHeader>
          <PopoverBody>
            {/* {(depositType === 'nft' && assets && assets.length > 0) ||
              (depositType === 'currency' && walletBalances && walletBalances.length > 0) ? (
              <>
                {depositType === 'nft' && assets && assets.length > 0 && (
                  <Text fontSize="md">{assets.length} assets selected for Deposit</Text>
                )}
                {depositType === 'currency' && walletBalances && walletBalances.length > 0 && (
                  <Flex alignItems="center" ml={2}>
                    <Select
                      value={symbol}
                      onChange={(e) => handleCurrencyChange(e.target.value)}
                      size="xs"
                      width="100px"
                      mr={2}
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
                      type="number"
                      value={amountDec}
                      onChange={(e) => handleAmountChange(e.target.value)}
                      placeholder="Amount"
                      size="xs"
                      width="80px"
                      mr={2}
                      max={bigNumberToDecimal(
                        walletBalances.find((asset) => asset.symbol === symbol)?.balance || '0',
                        Number(decimals)
                      )}
                    />
                    <Button size="xs" onClick={() => handleMaxButtonClick(symbol)}>
                      Max
                    </Button>
                  </Flex>
                )}

                <Flex alignItems="center">
                  <Text fontSize={'2xs'} color={'green.500'}>
                    To:
                  </Text>
                  <IconButton
                    size={'sm'}
                    colorScheme="gray"
                    aria-label="Send to Passport"
                    icon={<GiPassport />}
                    onClick={fillAddress}
                  />
                  <Input
                    type="text"
                    size={'sm'}
                    value={receiverAddress}
                    onChange={(e) => handleReceiverAddressChange(e.target.value)}
                    placeholder="Enter address"
                  />
                  <Button height={'30px'} onClick={() => handleDepositConfirm()} size="xs" ml={2}>
                    Send
                  </Button>
                  {error && (
                    <FormErrorMessage>
                      This address is either invalid or not registered on this network
                    </FormErrorMessage>
                  )}
                </Flex>
              </>
            ) : (
              <Text fontSize="sm">
                {depositType === 'nft'
                  ? 'No assets selected for Deposit'
                  : 'No balances available for Deposit'}
              </Text>
            )} */}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default ActionDeposits;