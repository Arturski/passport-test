// import { NumberString } from "@imtbl/imx-sdk";

export interface CurrencyDataInt {
    name: string;
    image_url: string;
    token_address: string;
    symbol: string;
    decimals: string;
    quantum: string;
    coinGecko?: string;
  }
  
  export let CurrencyData: CurrencyDataInt[] = [
    {
      name: "ApeCoin",
      image_url: "https://gateway.pinata.cloud/ipfs/QmTFU5YLmiaqJqAr9ACkijyci64u9oDnZAuaVwsrgbkZ7w",
      token_address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
      symbol: "APE",
      decimals: "18",
      quantum: "100000000",
      coinGecko: "apecoin"
    },
    {
      "name": "BR Token",
      "image_url": "https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--br.svg",
      "token_address": "0xe21363bf33620a291a6c354dc3bb99e40cb3086b",
      "symbol": "BR",
      "decimals": "18",
      "quantum": "100000000",
    },
    {
      "name": "CheckMate",
      "image_url": "https://d2kq0urxkarztv.cloudfront.net/5c17a00235022001e4b07d90/3432304/upload-c3673368-45fb-46eb-8975-6fadf59d968d.png",
      "token_address": "0xe910c2a090516fb7a7be07f96a464785f2d5dc18",
      "symbol": "CMT",
      "decimals": "18",
      "quantum": "100000000",
      coinGecko: 'checkmate-token'
    },
    {
      "name": "Deviants Factions",
      "image_url": "https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--dev.svg",
      "token_address": "0xa3d59c6d24f428dcfedc09724869e7af4d281fdd",
      "symbol": "DEV",
      "decimals": "6",
      "quantum": "1",
      coinGecko: 'deviantsfactions'
    },
    {
      "name": "Ethereum",
      "image_url": "https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--eth.svg",
      "token_address": "",
      "symbol": "ETH",
      "decimals": "18",
      "quantum": "100000000",
      coinGecko: 'ethereum'
    },
    {
      "name": "Gods Unchained",
      "image_url": "https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--gods.svg",
      "token_address": "0xccc8cb5229b0ac8069c51fd58367fd1e622afd97",
      "symbol": "GODS",
      "decimals": "18",
      "quantum": "100000000",
      coinGecko: 'gods-unchained'
    },
    {
      "name": "Guild Of Guardians",
      "image_url": "https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--gog.svg",
      "token_address": "0x9ab7bb7fdc60f4357ecfef43986818a2a3569c62",
      "symbol": "GOG",
      "decimals": "18",
      "quantum": "100000000",
      coinGecko: 'guild-of-guardians'
    },
    {
      name: "Immutable X",
      image_url: "https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--imx.svg",
      token_address: "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff",
      symbol: "IMX",
      decimals: "18",
      quantum: "100000000",
      coinGecko: "immutable-x" 
    },
    {
      "name": "The Lost Token",
      "image_url": "https://playlostglitches.com/wp-content/uploads/2022/11/The-LOST-token-logo.jpg",
      "token_address": "0x71854072ce51cc8859c8c178e33581034fa75753",
      "symbol": "LOST",
      "decimals": "18",
      "quantum": "100000000",
      coinGecko: 'glitch'
    },
    {
      "name": "OMI Token",
      "image_url": "https://uploads-ssl.webflow.com/5d65eace5e626f530825b72f/6255ff852089a05e1c8d006f_OMI_LOGO.png",
      "token_address": "0xed35af169af46a02ee13b9d79eb57d6d68c1749e",
      "symbol": "OMI",
      "decimals": "18",
      "quantum": "100000000000",
      coinGecko: 'ecomi'
    },
    {
      "name": "Escrowed Illuvium 2",
      "image_url": "https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--silv2.svg",
      "token_address": "0x7e77dcb127f99ece88230a64db8d595f31f1b068",
      "symbol": "SILV2",
      "decimals": "18",
      "quantum": "100000000",
      coinGecko: 'escrowed-illuvium-2'
    },
    {
      "name": "USD Coin",
      "image_url": "https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--usdc.svg",
      "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "symbol": "USDC",
      "decimals": "6",
      "quantum": "1",
      coinGecko: 'usd-coin'
    },
    {
      "name": "VCOIN",
      "image_url": "https://i.ibb.co/gdpKG6r/circle-vcoinlogo.png",
      "token_address": "0x2caa4021e580b07d92adf8a40ec53b33a215d620",
      "symbol": "VCO",
      "decimals": "18",
      "quantum": "100000000",
      coinGecko: 'metajuice'
    },
    {
      "name": "VCORE",
      "image_url": "https://i.ibb.co/1JRrWnz/VCOre-Logo-02-1.png",
      "token_address": "0x733b5056a0697e7a4357305fe452999a0c409feb",
      "symbol": "VCORE",
      "decimals": "18",
      "quantum": "100000000",
      coinGecko: 'vcore'
    }
  ];
  

  type RateType = {
    usd: number;
    image_url: string;
    symbol: string;
  };
  
  type RatesType = {
    [key: string]: RateType;
  };
  

  export const getCryptoExchangeRates = async (): Promise<RatesType> => {
    try {
      const coinGeckoKeys = CurrencyData.map(currency => currency.coinGecko)
        .filter(coinGecko => coinGecko)
        .join(',');
  
      if (coinGeckoKeys) {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinGeckoKeys}&vs_currencies=usd`);
  
        if (response.ok) {
          const rates = await response.json();
  
          const updatedRates: RatesType = {}; // Using the RatesType here
          CurrencyData.forEach(currency => {
            const tokenAddress = currency.token_address || 'ETH'; // Default to 'ETH' if token_address is not available
            if (currency.coinGecko && rates[currency.coinGecko]) {
              updatedRates[tokenAddress] = {
                usd: rates[currency.coinGecko].usd,
                image_url: currency.image_url,
                symbol: currency.symbol
              };
            }
          });
  
          return updatedRates;
        } else {
          throw new Error('Network response was not ok.');
        }
      } else {
        throw new Error('No CoinGecko data available for currencies.');
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw error;
    }
  };
  
  
  export function bigNumberToDecimal(bigNumberString:string, decimalPlaces: string): string {
    if (!bigNumberString) return '0'; // Handle empty or invalid input
  
    // Parse the big number string as a float
    const parsedValue = parseFloat(bigNumberString);
  
    // Check if the parsed value is a valid number
    if (isNaN(parsedValue)) return '0'; // Handle invalid numbers
  
    // Calculate the multiplier for the specified decimal places
    const multiplier = 10 ** Number(decimalPlaces);
  
    // Convert the value to a decimal with the specified number of decimal places
    const decimalValue = parsedValue / multiplier;
  
    return String(decimalValue);
  }

  export function decimalToBigNumber(decimalValue: string, decimalPlaces: string): string {
    // Parse the decimal value as a float
    const parsedValue = Number(decimalValue)
  
    // Check if the parsed value is a valid number
    if (isNaN(parsedValue)) return '0'; // Handle invalid numbers
  
    // Calculate the multiplier for the specified decimal places
    const multiplier = 10 ** Number(decimalPlaces);
  
    // Convert the value to a big number by multiplying with the multiplier
    const bigNumberValue = parsedValue * multiplier;
  
    return String(bigNumberValue);
  };
  
  declare global {
    interface Window {
      ethereum: any; // Using 'any' type for simplicity, you can define a more specific type if needed
    }
  }
  
  export const getEthereumAccount = async (): Promise<string | null> => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          return accounts[0];
        }
      } catch (error) {
        console.error('Error fetching Ethereum account:', error);
        return null;
      }
    }
  
    return null;
  };
  
  


// Function to get image_url from token_address
export function getImageUrlFromTokenAddress(tokenAddress: string): string | undefined {
  const currency = CurrencyData.find((data) => data.token_address === tokenAddress);
  return currency?.image_url || 'https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--eth.svg';
}

// Function to get symbol from token_address
export function getSymbolFromTokenAddress(tokenAddress: string): string | undefined {
  const currency = CurrencyData.find((data) => data.token_address === tokenAddress);
  return currency?.symbol;
}

// Function to get decimals from token address
export function getDecimalsFromTokenAddress(tokenAddress: string): string | undefined {
  const currency = CurrencyData.find((data) => data.token_address === tokenAddress);
  return currency?.decimals;
}

// Function to get decimals from symbol
export function getDecimalsFromSymbol(symbol: string): string | undefined {
  const currency = CurrencyData.find((data) => data.symbol === symbol);
  return currency?.decimals;
}