import { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { PassportContext } from '../PassportContext';


const WalletStatus = () => {
  const { passportClient, setProvider } = useContext(PassportContext);

  const handleConnect = async () => {
    if (passportClient && setProvider) {
        try {
          const provider = await passportClient.connectImx();
          setProvider(provider);
          console.log(provider);
        } catch (error) {
          console.error('Error connecting Passport to IMX:', error);
        }
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Button onClick={() => handleConnect()}>Connect Passport</Button>
    </Box>
  );
};

export default WalletStatus;
