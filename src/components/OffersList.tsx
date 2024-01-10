import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Link
} from '@chakra-ui/react';
import { OrdersApiListOrdersV3Request, OrderV3 } from '@imtbl/core-sdk'; // Import the actual request type from your API
import { fetchOrdersAll } from '../helpers/ImmutableFunctions'; 
import { bigNumberToDecimal } from '../helpers/CurrencyData';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface CompactOfferTableProps {
  tokenId: string;
  tokenAddress: string;
}
const CompactOfferTable: React.FC<CompactOfferTableProps> = ({
  tokenId,
  tokenAddress,
}) => {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState<OrderV3[]>([]);


  const initialParams: OrdersApiListOrdersV3Request = {
    pageSize: 200,
    orderBy: 'updated_at',
    direction: 'desc',
    status: 'active',
    buyTokenType: 'ERC721',
    buyTokenAddress: tokenAddress,
    buyTokenId: tokenId
  };

  useEffect(() => {
    const params: OrdersApiListOrdersV3Request = {
      ...initialParams,
      // Your custom parameters here based on token_address and token_id
    };

    setLoading(true); // Set loading to true when making the request

    fetchOrdersAll(params).then((response) => {
      if (response) {
        setOffers(response);
      } else {
        setOffers([]);
      }

      setLoading(false); // Set loading to false when the request is complete
    });
  }, [tokenAddress, tokenId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Table fontFamily={'monospace'} fontSize={'xs'} size={'xs'}>
      <Thead>
        <Tr>
          <Th color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>Amount</Th>
          <Th color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>User</Th>
          <Th color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>Updated</Th>
          <Th color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>API</Th>
        </Tr>
      </Thead>
      <Tbody>
        {offers.map((offer, index) => (
          <Tr key={index}>
            <Td borderColor={'whiteAlpha.500'} fontSize={'xs'} fontStyle={'monospace'}>{ bigNumberToDecimal(offer.maker_fees?.quantity_with_fees || '0', String(offer.sell.data.decimals))}</Td>
            <Td borderColor={'whiteAlpha.500'} fontSize={'xs'} fontStyle={'monospace'} title={offer.user}>{offer.user.substring(0,8)}...</Td>
            <Td borderColor={'whiteAlpha.500'} fontSize={'xs'} fontStyle={'monospace'} title={'timestamp'}>{offer.timestamp}</Td>
            <Td borderColor={'whiteAlpha.500'} fontSize={'xs'} fontStyle={'monospace'} title={'timestamp'}><Link href={'https://api.x.immutable.com/v3/orders/' + offer.order_id +'?include_fees=true'} isExternal ><ExternalLinkIcon mx='2px' /></Link></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CompactOfferTable;