import React, { useState, ReactNode } from 'react';

// Define a type for the wallet
type WalletType = {
  name: string | null;
  address: string | null;
};

// Define the shape of our context
export type DrawerContextType = {
  isWalletOpen: boolean;
  wallet: WalletType;
  setWallet: (wallet: WalletType) => void;
  onWalletOpen: (name: string, address: string) => void;
  onWalletClose: () => void;
};

// Create the context with an initial state
export const DrawerContext = React.createContext<DrawerContextType>({
  isWalletOpen: false,
  wallet: { name: null, address: null },
  setWallet: () => {},
  onWalletOpen: () => {},
  onWalletClose: () => {},
});

// Define a type for the props of DrawerContextProvider
type DrawerContextProviderProps = {
  children: ReactNode;
};

export const DrawerContextProvider: React.FC<DrawerContextProviderProps> = ({ children }) => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [wallet, setWallet] = useState<WalletType>({ name: null, address: null });

  const onWalletOpen = (name: string, address: string) => {
    setWallet({ name, address });
    setIsWalletOpen(true);
  };

  const onWalletClose = () => {
    setIsWalletOpen(false);
  };

  return (
    <DrawerContext.Provider value={{
      wallet,
      setWallet,
      isWalletOpen,
      onWalletOpen,
      onWalletClose,
    }}>
      {children}
    </DrawerContext.Provider>
  );
};
