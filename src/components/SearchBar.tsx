import React, { useState, useEffect, useRef } from 'react';
import {
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
  InputGroup,
  Box,
  List,
  ListItem,
  ListIcon,
  Popover,
  PopoverArrow,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton,
  useDisclosure,
  Button,
  Stack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { MdAdd } from 'react-icons/md';
import { CollectionData, CollectionObj } from '../helpers/CollectionData';
import { CurrencyData, CurrencyDataInt, decimalToBigNumber } from '../helpers/CurrencyData';
import { useMarketContext } from '../context/MarketContext';


interface SearchDimension {
  dimension: string;
  query: string | object;
  count?: null | number;
  key: string;
}

interface PresetDimension {
  id: string;
  name: string;
}

const presetDimensions: PresetDimension[] = [
  { id: 'collection', name: 'Collection Name' },
  { id: 'name', name: 'Name' },
  { id: 'metadata', name: 'Metadata' },
  { id: 'currency', name: 'Sale Currency' },
  { id: 'min', name: 'Minimum Amount' },
  { id: 'max', name: 'Maximum Amount' },
];


const SearchBar: React.FC = () => {
  const [currentSearchDimensions, setSearchDimensions] = useState<SearchDimension[]>([]);
  const [currentDimension, setCurrentDimension] = useState<string>('');
  const [currentQuery, setCurrentQuery] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  // const { collectionAddress, setCollectionAddress } = useMarketContext() as CollectionSearchType;
  const [collectionSuggestions, setCollectionSuggestions] = useState<CollectionObj[]>([]);
  const [currencySuggestions, setCurrencySuggestions] = useState<CurrencyDataInt[]>([]);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [metadataKey, setMetadataKey] = useState('');
  const [metadataValue, setMetadataValue] = useState('');
  const [metadataPairs, setMetadataPairs] = useState<{ key: string; value: string }[]>([]);
  const { setMetadata, setCollectionAddress, setTokenName, setMinSell, setMaxSell, setCurrency
  } = useMarketContext()!;
  
  
  const [metadataCount, setMetadataCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleShowSuggestions = () => {
    setShowSuggestions(true);
  };

  const addMetadataPair = () => {
    if (metadataKey && metadataValue) {
      setMetadataCount(metadataCount + 1);
      setMetadataPairs([...metadataPairs, { key: metadataKey, value: metadataValue }]);
      setMetadataKey('');
      setMetadataValue('');
    }
  };

  const removeMetadataPair = (index: number) => {
    const updatedMetadataPairs = [...metadataPairs];
    updatedMetadataPairs.splice(index, 1);
    setMetadataPairs(updatedMetadataPairs);

    // Check if the updated array is empty and update the context
    if (updatedMetadataPairs.length === 0) {
      setMetadata('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const colonIndex = input.indexOf(':');
    if (colonIndex !== -1) {
      const dimension = input.slice(0, colonIndex);
      setCurrentDimension(dimension);
      const query = input.slice(colonIndex + 1);
      setCurrentQuery(query.trim());

      if (dimension.toLowerCase() === 'collection') {
        const matchingCollections = getCollectionSuggestions(query);
        setCollectionSuggestions(matchingCollections);
      } else if (dimension.toLowerCase() === 'currency') {
        const matchingCurrencies = getCurrencySuggestions(query);
        setCurrencySuggestions(matchingCurrencies);
      } else {
        setCollectionSuggestions([]);
        setCurrencySuggestions([]);
      }

      handleShowSuggestions();
    } else {
      setCurrentQuery(input);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentDimension && currentQuery) {
      // Submit the dimension value
      handleSearch();
    }
    if (e.key === 'Escape' && currentDimension && !currentQuery) {
      // Submit the dimension value
      setCurrentDimension('');
    }
    if (e.key === 'Backspace' && currentDimension && !currentQuery) {
      // Submit the dimension value
      setCurrentDimension('');
    }
  };

  const getCollectionSuggestions = (query?: string): CollectionObj[] => {
    return CollectionData.filter((collection) => collection.name.toLowerCase().includes((query || currentQuery).toLowerCase())
    );
  };

  const getCurrencyAddress = (name: string): string | undefined => {
    const currencyObj = CurrencyData.find(
      (currency) => currency.name === name
    );

    return currencyObj?.token_address;
  };

  const getCollectionAddress = (name: string): string | undefined => {
    const collection = CollectionData.find(
      (collection) => collection.name === name
    );

    return collection?.address;
  };

  const getCurrencySuggestions = (query?: string): CurrencyDataInt[] => {
    return CurrencyData.filter((currency) => currency.name.toLowerCase().includes((query || currentQuery).toLowerCase())
    );
  };

  const handleSearch = () => {
    if (currentDimension && currentQuery) {
      if (currentDimension == 'currency') {
        const address = getCurrencyAddress(currentQuery) || '';
        setSearchDimensions([...currentSearchDimensions, { dimension: currentDimension, query: currentQuery, key: address }]);
        setCurrentDimension('');
        setCurrentQuery('');
        setShowSuggestions(false);
      } else if (currentDimension == 'collection') {
        const address = getCollectionAddress(currentQuery) || '';
        setSearchDimensions([...currentSearchDimensions, { dimension: currentDimension, query: currentQuery, key: address }]);
        setCurrentDimension('');
        setCurrentQuery('');
        setShowSuggestions(false);
      } else if (currentDimension == 'name') {
        setSearchDimensions([...currentSearchDimensions, { dimension: currentDimension, query: currentQuery, key: currentQuery }]);
        setCurrentDimension('');
        setCurrentQuery('');
        setShowSuggestions(false);
      }
      else if (currentDimension == 'min') {
        const big = decimalToBigNumber(currentQuery, '18');
        setSearchDimensions([...currentSearchDimensions, { dimension: currentDimension, query: currentQuery, key: big }]);
        setCurrentDimension('');
        setCurrentQuery('');
        setShowSuggestions(false);
      } else if (currentDimension == 'max') {
        const big = decimalToBigNumber(currentQuery, '18');
        setSearchDimensions([...currentSearchDimensions, { dimension: currentDimension, query: currentQuery, key: big }]);
        setCurrentDimension('');
        setCurrentQuery('');
        setShowSuggestions(false);
      }
    };
  }

    const handleMetadataSearch = () => {
      if (metadataPairs) {
        setSearchDimensions([...currentSearchDimensions, { dimension: currentDimension, query: metadataPairs, key: ''}]);
        setMetadataPairs([]);
        setCurrentDimension('');
        setCurrentQuery('');
        setShowSuggestions(false);
        onClose();
      }
    };

    const removeDimension = (index: number) => {
      const updatedDimensions = [...currentSearchDimensions];
      updatedDimensions.splice(index, 1);
      setSearchDimensions(updatedDimensions);
    };

    const handleSuggestionClick = (object: PresetDimension | CollectionObj | CurrencyDataInt) => {
      handleSearch();

      if ('id' in object) {
        // Static suggestions
        setCurrentDimension(object.id);
        setCurrentQuery('');
        inputRef.current?.focus();
        if (object.id === 'metadata') {
          onToggle();
        }

      } else if ('symbol' in object) {
        // Currency Suggestions
        setSearchDimensions([...currentSearchDimensions, { dimension: currentDimension, query: object.symbol, key: object.token_address }]);
        setCurrentDimension('');
        setCurrentQuery('');
        setShowSuggestions(false);
      } else if ('metadata_api_url' in object) {
        // Collection suggestions
        setSearchDimensions([...currentSearchDimensions, { dimension: currentDimension, query: object.name, key: object.address }]);
        setCurrentDimension('');
        setCurrentQuery('');
        setShowSuggestions(false);
      }
    };

    useEffect(() => {
      // Initialize all context values to default
      setMetadata('');
      setTokenName('');
      setCollectionAddress('');
      setMinSell('');
      setMaxSell('');
      setCurrency('');

      // Update context based on current dimensions
      currentSearchDimensions.forEach(dimension => {
        switch (dimension.dimension) {
          case 'metadata':
            setMetadata(dimension.key);
            break;
          case 'name':
            setTokenName(String(dimension.query || '-'));
            break;
          case 'currency':
            setCurrency(dimension.key);
            break;
          case 'min':
            setMinSell(String(dimension.query || '0'));
            break;
          case 'max':
            setMaxSell(String(dimension.query || '0'));
            break;
          case 'collection':
            setCollectionAddress(dimension.key);
            break;
          // Add cases for other dimensions
        }
      });
      
    }, [currentSearchDimensions]);


    useEffect(() => {
      const transformMetadata = () => {
        if (metadataPairs.length > 0) {
          const newMetadata: { [key: string]: any } = {};
          metadataPairs.forEach(({ key, value }) => {
            if (value.toLowerCase() === 'true') {
              newMetadata[key] = [true];
            } else if (value.toLowerCase() === 'false') {
              newMetadata[key] = [false];
            } else {
              newMetadata[key] = [value];
            }
          });
  
          // Console output of the stringified and URL encoded value
          // console.log(JSON.stringify(newMetadata));
          // console.log(encodeURIComponent(JSON.stringify(newMetadata)));
          setMetadata(encodeURIComponent(JSON.stringify(newMetadata)));
        }
      };
  
      transformMetadata();
    }, [metadataPairs, setMetadata]);

    return (
      <Box position="relative" width={'100%'}>
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement='bottom-start'
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <InputGroup size="lg">
              <Input
                ref={inputRef}
                placeholder="Search..."
                value={`${currentDimension ? `${currentDimension}:` : ''}${currentQuery}`}
                onFocus={handleShowSuggestions}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
              />
            </InputGroup>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Metadata Search:</PopoverHeader>
            <PopoverBody>
              <Stack spacing={2}>
                {metadataPairs.map((pair, index) => (
                  <Flex key={index} alignItems="center">
                    <Input
                      placeholder="Name"
                      value={pair.key}
                      size="sm"
                      fontSize={12}
                      isReadOnly
                    />
                    <Input
                      placeholder="Value"
                      value={pair.value}
                      size="sm"
                      fontSize={12}
                      isReadOnly
                    />
                    <Button size="sm" onClick={() => removeMetadataPair(index)}>
                      <CloseIcon />
                    </Button>
                  </Flex>
                ))}
                <Flex alignItems="center">
                  <Input
                    placeholder="Name"
                    value={metadataKey}
                    onChange={(e) => setMetadataKey(e.target.value)}
                    size="sm"
                    fontSize={12}
                  />
                  <Input
                    placeholder="Value"
                    value={metadataValue}
                    onChange={(e) => setMetadataValue(e.target.value)}
                    size="sm"
                    fontSize={12}
                  />
                  <Button size="sm" onClick={addMetadataPair}>
                    Add
                  </Button>
                </Flex>
                <Button onClick={handleMetadataSearch}>complete search</Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        {currentDimension && showSuggestions && (
          <List position="absolute" zIndex={1} mt={-2} ml={2} borderRadius="md" bg={'blackAlpha.800'} boxShadow="sm">
            {currentDimension.toLowerCase() === 'collection'
              ? collectionSuggestions.map((collection, index) => (
                <ListItem key={index} onClick={() => handleSuggestionClick(collection)} p={2} cursor="pointer">
                  <ListIcon as={MdAdd} color="blue.500" />
                  {collection.name}
                </ListItem>
              ))
              : currentDimension.toLowerCase() === 'currency'
                ? currencySuggestions.map((currency, index) => (
                  <ListItem key={index} onClick={() => handleSuggestionClick(currency)} p={2} cursor="pointer">
                    <ListIcon as={MdAdd} color="blue.500" />
                    {currency.name}
                  </ListItem>
                ))
                : null // Add this line
            }
          </List>
        )}

        {!currentDimension && showSuggestions && (
          <List position="absolute" zIndex={1} mt={-2} ml={2} borderRadius="md" bg={'blackAlpha.800'} boxShadow="sm">
            {/* Render other suggestions */}
            {presetDimensions
              .filter((dimension) => {
                const dimensionId = dimension.id.toLowerCase();
                const currencyDimensionExists = currentSearchDimensions.some(
                  (searchDim) => searchDim.dimension.toLowerCase() === 'currency'
                );

                if (dimensionId === 'min' || dimensionId === 'max') {
                  // Add suffix only if 'currency' dimension doesn't exist
                  return (
                    (!currencyDimensionExists && dimensionId.includes(currentQuery.toLowerCase())) ||
                    (currencyDimensionExists &&
                      !currentSearchDimensions.some((searchDim) => searchDim.dimension.toLowerCase() === dimensionId))
                  );
                } else {
                  return (
                    !currentSearchDimensions.some(
                      (searchDim) => searchDim.dimension.toLowerCase() === dimensionId
                    ) && dimensionId.includes(currentQuery.toLowerCase())
                  );
                }
              })
              .map((dimension, index) => (
                <ListItem key={index} onClick={() => handleSuggestionClick(dimension)} p={2} cursor="pointer">
                  <ListIcon as={MdAdd} color="blue.500" />
                  {dimension.id === 'min' || dimension.id === 'max' ? (
                    <>
                      {dimension.id}{' '}
                      {!currentSearchDimensions.some((searchDim) => searchDim.dimension.toLowerCase() === 'currency') && (
                        <span style={{ fontStyle: 'italic', fontSize: 'x-small' }}>(Select Currency)</span>
                      )}
                    </>
                  ) : (
                    dimension.id
                  )}
                </ListItem>
              ))}
          </List>
        )}

        <Flex position="absolute" right="0" top="50%" transform="translateY(-50%)" mr={2}>
          {currentSearchDimensions.map((dimension, index) => (
            <Tag key={index} variant="subtle" colorScheme="teal" m={1}>
              {dimension.dimension === 'metadata' ? (
                <TagLabel>{`${dimension.dimension}:${metadataCount}`}</TagLabel>
              ) : (
                <TagLabel>{`${dimension.dimension}:${dimension.query}`}</TagLabel>
              )}
              <TagCloseButton onClick={() => removeDimension(index)} />
            </Tag>
          ))}
        </Flex>

      </Box>
    );
  };

export default SearchBar;