import React, { createContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { config, passport,  } from '@imtbl/sdk';

interface PassportContextType {
  passportClient?: passport.Passport;
  setPassportClient: Dispatch<SetStateAction<passport.Passport | undefined>>;
  provider?: any | null; // Updated type to include null
  setProvider: Dispatch<SetStateAction<any | null>>; // Updated type to include null
}

export const PassportContext = createContext<PassportContextType | undefined>(undefined);

export const PassportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [passportClient, setPassportClient] = useState<passport.Passport | undefined>();
  const [provider, setProvider] = useState<any | null>(null); // Updated initial value to null

  useEffect(() => {
    // Passport configuration options
    const passportConfig = {
      clientId: "GAvERIbbGXUYVWqlZLZ9KZ2p1LvRaHNv",
      redirectUri: "https://passport-test-mocha.vercel.app/login",
      logoutRedirectUri: "https://passport-test-mocha.vercel.app/",
      scope: "transact openid offline_access email",
      audience: "platform_api",
      baseConfig: new config.ImmutableConfiguration({
        environment: config.Environment.SANDBOX,
      }),
    };

    const passportInstance = new passport.Passport(passportConfig);
    setPassportClient(passportInstance);
  }, []);

  return (
    <PassportContext.Provider
      value={{ passportClient, setPassportClient, provider, setProvider }}
    >
      {children}
    </PassportContext.Provider>
  );
};
