import { useContext, useEffect, useState } from 'react';
import { Box, Avatar, Flex, Icon, Spinner } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { useMarketContext, MarketContextType } from '../context/MarketContext';
import { imxlink } from '../helpers/ImmutableFunctions';
import { DrawerContext, DrawerContextType } from '../context/DrawerContext';
import { getEthereumAccount } from '../helpers/CurrencyData';
import { PassportContext } from '../context/PassportContext';
import { passport } from '@imtbl/sdk';
interface WalletAvatar {
  src: string;
  walletKey: string;
}

const walletAvatars: Record<string, WalletAvatar> = {
  link: {
    src: '/link.png', // Replace with the actual image URL for Link
    walletKey: 'link',
  },
  passport: {
    src: '/immutable.png', // Replace with the actual image URL for Passport
    walletKey: 'passport',
  },
};

export const WalletStatus = () => {
  const { passportClient, setProvider, provider } = useContext(PassportContext)!;
  const { walletState, setWalletState } = useMarketContext() as MarketContextType;

  const { onWalletOpen } = useContext(DrawerContext) as DrawerContextType;
  const [connecting, setConnecting] = useState(false);


  useEffect(() => {
    const checkEthereumAccount = async () => {
      setConnecting(true);
      const ethereumAccount = await getEthereumAccount();
      if (ethereumAccount) {
        console.log('Ethereum account found:', ethereumAccount);
        setWalletState((prevWalletState) => ({
          ...prevWalletState,
          link: ethereumAccount,
        }));
        setConnecting(false); 
      } else {
        console.log('No Ethereum account found in the browser.');
        setConnecting(false); 
      }
    };

    const checkPassport = async () => {
      setConnecting(true); 
      if (provider) {
        const response = await passportClient.getUserInfo();
        console.log('userinfo',response);
        setConnecting(false); 
      } else {
        console.log('Trying ');
        const userProfile: passport.UserProfile = await passportClient.login({ useCachedSession: true });
        if (userProfile) {
          const newProvider = await passportClient.connectImx(); 
          setProvider(newProvider);
        } else {
          console.log('np cached logins');
        }
        setConnecting(false); 
        // setWalletState((prevWalletState) => ({
        //   ...prevWalletState,
        //   link: ethereumAccount,
        // }));
      }
    };

    checkEthereumAccount();
    checkPassport();
  }, [ provider]);

  const handleConnect = async (walletType: 'passport' | 'link') => {
    if (passportClient && setProvider && setWalletState && walletState) {
      if (walletType === 'passport') {
        try {
          const provider = await passportClient.connectImx();
          console.log('provider', provider);
          setWalletState({ ...walletState, passport: await provider.getAddress() });
          console.log('wallet state updated');
          console.log(walletState);
        } catch (error) {
          console.error('Error connecting Passport to IMX:', error);
        }
      } else if (walletType === 'link') {
        try {
          const response = await imxlink.setup({});
          setWalletState({ ...walletState, link: response.address });
        } catch (error) {
          console.error('Error connecting Link to IMX:', error);
        }
        console.log('link setup');
      }
    }
  };

  return (
    <Box display="flex" alignItems="center">
      {Object.entries(walletState).map(([walletName, walletAddress], index) => {
        const avatar = walletAvatars[walletName];
        return (
          <div key={index} style={{ cursor: walletAddress ? 'pointer' : 'default' }}>
            <Avatar
              name={`Avatar ${walletName}`}
              src={avatar.src}
              size="md"
              onClick={() => (walletAddress ? onWalletOpen(walletName, walletAddress) : handleConnect(walletName  as 'passport' | 'link'))}
              _hover={{ cursor: walletAddress ? 'pointer' : 'default' }}
              mr={4}
            >
              <Flex align="center" justify="center" position="relative">
                {connecting ? (
                  <Spinner
                    size="md"
                    color="blue.500"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  />
                ) : (
                  <Icon
                    as={FaCircle}
                    boxSize={4}
                    color={walletAddress ? 'green.400' : 'gray.400'}
                    position="absolute"
                    top="2"
                    right="0"
                  />
                )}
              </Flex>
            </Avatar>
          </div>
        );
      })}
    </Box>
  );
};

export default WalletStatus;
