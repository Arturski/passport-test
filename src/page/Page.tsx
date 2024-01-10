import React from 'react';
import { Box } from '@chakra-ui/react';
import WalletStatus from '../components/WalletStatus';
import GalleryView from '../view/GalleryView';


const Page: React.FC = () => {

  return (
    <Box position="relative" overflow={'visible'}>
        <WalletStatus />
        <GalleryView />
    </Box>
  );
};

export default Page;
