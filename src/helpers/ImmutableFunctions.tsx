// import { Link} from '@imtbl/imx-sdk';
import {  ImmutableX, Config , BalancesApiListBalancesRequest, ListBalancesResponse, AssetsApiListAssetsRequest, AssetsApiGetAssetRequest, ListOrdersResponseV3, OrdersApiListOrdersV3Request, OrderV3, TokenDetails, Asset, TokensApiGetTokenRequest, TransfersApiListTransfersRequest, ListTransfersResponse, WithdrawalsApiListWithdrawalsRequest, ListWithdrawalsResponse, DepositsApiListDepositsRequest, ListDepositsResponse, MintsApiListMintsRequest, ListMintsResponse, Mint, Transfer, Withdrawal, Deposit} from '@imtbl/core-sdk';


export async function getTokenIdAndAddress(order: OrderV3): Promise<any> {
  const tokenId = order.buy.type === 'ERC721' ? order.buy.data.token_id : order.sell.data.token_id;
  const contractAddress = order.buy.type === 'ERC721' ? order.buy.data.token_address : order.sell.data.token_address;
  return { tokenId, contractAddress };
};

// export const imxlink = new Link('https://link.sandbox.x.immutable.com');
const imxClient = new ImmutableX(Config.SANDBOX);

// export const imxlink = new Link('https://link.x.immutable.com');
// const imxClient = new ImmutableX(Config.PRODUCTION);


// export async function linkCoinTransfer(amount: string, symbol: string, token_address: string | null, to_address: string) {
//   try {
//     let transferRequests;

//     if (token_address) {
//       // ERC20 token transfer
//       transferRequests = [{
//         amount: amount,
//         symbol: symbol,
//         type: ERC20TokenType.ERC20,
//         tokenAddress: token_address,
//         toAddress: to_address,
//       } as { amount: string; symbol: string; type: ERC20TokenType; tokenAddress: string; toAddress: string }];
//     } else {
//       // ETH transfer
//       transferRequests = [{
//         amount: amount,
//         type: ETHTokenType,
//         toAddress: to_address,
//       } as { amount: string; type: typeof ETHTokenType; toAddress: string }];
//     }

//     const transferResponsePayload = await imxlink.transfer(transferRequests);
//     console.log(transferResponsePayload);
//     return true;
//   } catch (error) {
//     console.error('Transfer error:', error);
//     return false;
//   }
// }


export async function validateAddress(address: string): Promise<boolean> {
  try {
    // Perform address validation logic here
    const user = await imxClient.getUser(address);
    console.log('user', user);
    return true;
  } catch (error) {
    console.error('Address validation error:', error);
    return false;
  }
}

export async function fetchTokens(): Promise<TokenDetails[]> {
  try {
    // Perform address validation logic here
    const tokens = await imxClient.listTokens({ pageSize: 50 });
    return tokens.result;
  } catch (error) {
    console.error('Error fetching tokens:', error);
    throw error;
  }
}

export const fetchUserAssets = async (address: string) => {
  const pageSize = 200; // Number of items per page
  let hasMore = true;
  let cursor = ''; // Initialize cursor

  const allAssets: any[] = [];

  while (hasMore) {
    const assetParams: AssetsApiListAssetsRequest = {
      user: address,
      pageSize,
      orderBy: 'name',
      status: 'imx',
      cursor, // Pass cursor for paginated requests
    };

    try {
      const assetResponse = await imxClient.listAssets(assetParams);
      const { result, remaining } = assetResponse;

      allAssets.push(...result); // Accumulate assets

      if (remaining > 0) {
        cursor = assetResponse.cursor; // Update cursor for the next request
      } else {
        hasMore = false; // No more pages
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  return allAssets;
};


export const fetchAssetDetail = async (address: string, token_id: string): Promise<Asset | null> => {
  const assetParams: AssetsApiGetAssetRequest = {
    tokenAddress: address,
    tokenId: token_id,
    includeFees: true,
  };



  try {
    const assetResponse = await imxClient.getAsset(assetParams);
    return assetResponse;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchBalances = async (address?: string) => {
  if (!address) {
    return;
  }

  const balanceRequest: BalancesApiListBalancesRequest = {
    owner: address,
  };
  const balances: ListBalancesResponse = await imxClient.listBalances(balanceRequest);
  return balances
};



export const fetchOrders = async (params: OrdersApiListOrdersV3Request): Promise<ListOrdersResponseV3> => {
  try {
    const listOrdersResponse: ListOrdersResponseV3 = await imxClient.listOrders(params);
    return listOrdersResponse;
  } catch (error) {
    console.error(error);
    return {} as ListOrdersResponseV3; // Return an empty array in case of error
  }
};

export const fetchOrdersAll = async (params: OrdersApiListOrdersV3Request): Promise<OrderV3[]> => {
  try {
    let hasMore = true;
    let cursor = ''; // Initialize cursor
    const allOrders: OrderV3[] = [];

    while (hasMore) {
      const ordersParams = { ...params, cursor };

      const listOrdersResponse: ListOrdersResponseV3 = await imxClient.listOrders(ordersParams);
      const { result, remaining, cursor: newCursor } = listOrdersResponse;

      allOrders.push(...result); // Accumulate orders

      if (remaining > 0) {
        cursor = newCursor; // Update cursor for the next request
      } else {
        hasMore = false; // No more pages
      }
    }

    return allOrders;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of error
  }
};

export const fetchTokenDetail = async (address?: string) => {
  if (!address) {
    return;
  }

  const tokenDetailRequest: TokensApiGetTokenRequest = {
    address: address,
  };
  const details:TokenDetails  = await imxClient.getToken(tokenDetailRequest);
  return details
};

export const fetchDeposits = async (params: DepositsApiListDepositsRequest): Promise<ListDepositsResponse> => {
  try {
    const depositResponse: ListDepositsResponse = await imxClient.listDeposits(params);
    console.log(depositResponse);
    return depositResponse;
  } catch (error) {
    console.error(error);
    return {} as ListDepositsResponse; // Return an empty array in case of error
  }
};

export const fetchTransfersAll = async (params: TransfersApiListTransfersRequest): Promise<Transfer[]> => {
  try {
    let hasMore = true;
    let cursor = ''; // Initialize cursor
    const allTransfers = [];

    while (hasMore) {
      const transferParams = { ...params, cursor };

      const transferResponse: ListTransfersResponse = await imxClient.listTransfers(transferParams);
      const { result, remaining, cursor: newCursor } = transferResponse;

      allTransfers.push(...result); // Accumulate transfers

      if (remaining > 0) {
        cursor = newCursor; // Update cursor for the next request
      } else {
        hasMore = false; // No more pages
      }
    }

    return allTransfers;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};


export const fetchMintsAll = async (params: MintsApiListMintsRequest): Promise<Mint[]> => {
  try {
    let hasMore = true;
    let cursor = ''; // Initialize cursor
    const allMints = [];

    while (hasMore) {
      const mintParams = { ...params, cursor };

      const listMintsResponse: ListMintsResponse = await imxClient.listMints(mintParams);
      const { result, remaining, cursor: newCursor } = listMintsResponse;

      allMints.push(...result); // Accumulate orders

      if (remaining > 0) {
        cursor = newCursor; // Update cursor for the next request
      } else {
        hasMore = false; // No more pages
      }
    }

    return allMints;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of error
  }
};

export const fetchWithdrawalsAll = async (params: WithdrawalsApiListWithdrawalsRequest): Promise<Withdrawal[]> => {
  try {
    let hasMore = true;
    let cursor = ''; // Initialize cursor
    const allWithdrawals = [];

    while (hasMore) {
      const withdrawalParams = { ...params, cursor };

      const withdrawalResponse: ListWithdrawalsResponse = await imxClient.listWithdrawals(withdrawalParams);
      const { result, remaining, cursor: newCursor } = withdrawalResponse;

      allWithdrawals.push(...result); // Accumulate withdrawals

      if (remaining > 0) {
        cursor = newCursor; // Update cursor for the next request
      } else {
        hasMore = false; // No more pages
      }
    }

    return allWithdrawals;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};


export const fetchDepositsAll = async (params: DepositsApiListDepositsRequest): Promise<Deposit[]> => {
  try {
    let hasMore = true;
    let cursor = ''; // Initialize cursor
    const allDeposits = [];

    while (hasMore) {
      const deposistsParams = { ...params, cursor };

      const depositsResponse: ListDepositsResponse = await imxClient.listDeposits(deposistsParams);
      const { result, remaining, cursor: newCursor } = depositsResponse;

      allDeposits.push(...result); // Accumulate withdrawals

      if (remaining > 0) {
        cursor = newCursor; // Update cursor for the next request
      } else {
        hasMore = false; // No more pages
      }
    }

    return allDeposits;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};