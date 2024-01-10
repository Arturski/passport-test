import React from 'react';
import { Box } from '@chakra-ui/react';
import GalleryView from '../view/GalleryView';


const Page: React.FC = () => {

  return (
    <Box position="relative" overflow={'visible'}>
        <GalleryView />
    </Box>
  );
};

export default Page;
