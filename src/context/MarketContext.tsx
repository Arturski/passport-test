import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

type FxRateType = {
  [key: string]: {
    usd: number;
    image_url: string;
    symbol: string;
  };
};

type WalletStateType = {
  link: string | null;
  passport: string | null;
};

export type MarketContextType = {
  tokenName: string;
  setTokenName: (name: string) => void;
  collectionAddress: string;
  setCollectionAddress: (address: string) => void;
  currency: string;
  setCurrency: (selectedCurrency: string) => void;
  currencyType: string;
  setCurrencyType: (selectedCurrency: string) => void;
  minSell: string;
  setMinSell: (minsell: string) => void;
  maxSell: string;
  setMaxSell: (maxsell: string) => void;
  walletState: WalletStateType;
  setWalletState: Dispatch<SetStateAction<WalletStateType>>;
  fxRate: FxRateType;
  setFxRate: (rates: FxRateType) => void;
  metadata: string;
  setMetadata: (metadata: string) => void;
};

const MarketContext = createContext<MarketContextType | undefined>(undefined);

export function useMarketContext() {
  return useContext(MarketContext);
}

export function MarketProvider({ children }: { children: React.ReactNode }) {
  const [tokenName, setTokenName] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [currency, setCurrency] = useState('');
  const [currencyType, setCurrencyType] = useState('');
  const [minSell, setMinSell] = useState('');
  const [maxSell, setMaxSell] = useState('');
  const [fxRate, setFxRate] = useState<FxRateType>({});
  const [metadata, setMetadata] = useState('');

  const [walletState, setWalletState] = useState<WalletStateType>({
    link: null,
    passport: null,
  });

  return (
    <MarketContext.Provider value={{
      tokenName,
      setTokenName,
      collectionAddress,
      setCollectionAddress,
      currency,
      setCurrency,
      currencyType,
      setCurrencyType,
      minSell,
      setMinSell,
      maxSell,
      setMaxSell,
      walletState,
      setWalletState,
      fxRate,
      setFxRate,
      metadata,
      setMetadata
    }}>
      {children}
    </MarketContext.Provider>
  );
}
