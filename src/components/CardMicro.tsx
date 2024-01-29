import React, { useState } from 'react';
import {
  Box,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Flex,
  IconButton,
  SimpleGrid
} from '@chakra-ui/react';
import MetadataDisplay from './MetadataDisplay';
import { AssetWithOrders } from '@imtbl/core-sdk';
import { BsInfoSquare } from "react-icons/bs";
import NFTData from './NFTData';

interface CardMicroProps {
  asset: AssetWithOrders;
  selected: boolean;
  onSelect: (assetId: string, selected: boolean) => void;
}

const CardMicro: React.FC<CardMicroProps> = ({ asset, selected, onSelect }) => {
  const cardBorder = selected ? '2px solid gray' : '1px solid black';
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleClick = () => {
    onSelect(asset.token_id, !selected);
  };

  const handleButtonHover = (isHovering: boolean) => {
    setIsButtonVisible(isHovering);
  };

  const handleInfoModalOpen = () => {
    setIsInfoModalOpen(true);
  };

  const handleInfoModalClose = () => {
    setIsInfoModalOpen(false);
  };

  return (
    <Center p={1} onClick={handleClick}>
      <Box
        w="128px"
        h="128px"
        rounded="sm"
        overflow="hidden"
        border={cardBorder}
        boxShadow={'whiteAlpha.500'}
        position="relative"
        onMouseEnter={() => handleButtonHover(true)}
        onMouseLeave={() => handleButtonHover(false)}
      >
        <img
          src={asset?.image_url || 'https://placehold.co/400x300'}
          alt={asset.name || 'Asset Image'}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />

        {isButtonVisible && (
          <Flex position="absolute" top="5px" right="5px" zIndex="1">
            <Modal size={'xl'} isOpen={isInfoModalOpen} onClose={handleInfoModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Asset Information</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflow={'auto'}>
                <NFTData token_address={asset.token_address} token_id={asset.token_id} nft_created={asset.created_at} owner={asset.user} />

                  <SimpleGrid columns={2}>
                    <Image src={asset.image_url || ''} alt={asset.name || 'Asset Image'} boxSize="xs" objectFit="contain" />
                    <Box width={'100%'} height={'100%'}>
                      <MetadataDisplay metadata={asset.metadata || {}} />
                    </Box>
                  </SimpleGrid>
                </ModalBody>
              </ModalContent>
            </Modal>
            
            <IconButton aria-label='Open for more info' icon={<BsInfoSquare />} onClick={handleInfoModalOpen} size={'sm'} />

          </Flex>
        )}
      </Box>
    </Center>
  );
};

export default CardMicro;
