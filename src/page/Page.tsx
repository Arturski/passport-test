import React from 'react';
import { Box } from '@chakra-ui/react';
import WalletStatus from '../components/WalletStatus';


const Page: React.FC = () => {

  return (
    <Box position="relative" overflow={'visible'}>
        <WalletStatus />
    </Box>
  );
};

export default Page;
