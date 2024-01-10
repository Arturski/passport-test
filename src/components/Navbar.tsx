
import {
  Box,
  Flex,
  Text,
  HStack,
  useColorModeValue,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react';
import WalletStatus from './WalletStatus.tsx';
import SearchBar from './SearchBar.tsx';



export default function Navbar() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.900', 'gray.100')}
        color={useColorModeValue('white', 'gray.900')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex minWidth={'190px'} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} mr={2}  flexDirection="column">
          <Heading
            as={'h1'}
            size={'lg'}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'monospace'}
            color={useColorModeValue('whiteAlpha.800', 'white')}
            fontWeight={'bold'}
            fontSize={'2xl'}
          >
            WEEEB
          </Heading>
          <Flex flexDirection="column">
            <Text fontSize="2xs" fontStyle="italic">
              An NFT hub powered by Immutable
            </Text>
          </Flex>
        </Flex>

        <HStack spacing={4} mr={5} w={'100%'}>
          <SearchBar />
          {/* <CollectionSearch />
          <NameSearch />
          <SearchMetadata />
          <CurrencySearch />
          <PriceSearch /> */}
        </HStack>

        <WalletStatus />
      </Flex>
    </Box>
  );
}
