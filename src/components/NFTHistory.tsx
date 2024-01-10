import { useEffect, useState } from 'react';
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

import { ExternalLinkIcon } from '@chakra-ui/icons';

import {
  fetchOrders,
  fetchDepositsAll,
  fetchTransfersAll,
  fetchWithdrawalsAll,
} from '../helpers/ImmutableFunctions';


interface NFTHistoryProps {
  token_address: string;
  token_id: string;
}

interface Event {
  type: string;
  timestamp: string;
  o_url: string;
}

const NFTHistory: React.FC<NFTHistoryProps> = ({ token_address, token_id }) => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const allEvents = [];

      // Fetch orders
      const orderParams = {
        pageSize: 200,
        status: 'filled' as const,
        buyTokenType: 'ERC721',
        buyTokenAddress: token_address,
        buyTokenId: token_id,
      };

      const orderResponse = await fetchOrders(orderParams);

      if (orderResponse && orderResponse.result) {
        // Process order events
        const orderEvents = orderResponse.result.map((order) => ({
          type: 'Purchased',
          timestamp: order.timestamp,
          o_url: 'https://api.x.immutable.com/v3/orders/' + order.order_id + '?include_fees=true',
        }));
        allEvents.push(...orderEvents);
      }

      // Fetch orders
      const listParams = {
        pageSize: 200,
        sellTokenType: 'ERC721',
        sellTokenAddress: token_address,
        sellTokenId: token_id
      };

      const listResponse = await fetchOrders(listParams);

      if (listResponse && listResponse.result) {
        // Process order events
        const listEvents = listResponse.result.map((listing) => ({
          type: 'Listed',
          timestamp: listing.timestamp,
          o_url: 'https://api.x.immutable.com/v3/orders/' + listing.order_id + '?include_fees=true',
        }));
        allEvents.push(...listEvents);
      }

      // Fetch deposits
      const depositParams = {
        pageSize: 200,
        status: 'success',
        tokenType: 'ERC721',
        tokenAddress: token_address,
        tokenId: token_id,
      };

      const depositResponse = await fetchDepositsAll(depositParams);

      if (depositResponse && depositResponse) {
        // Process deposit events
        const depositEvents = depositResponse.map((deposit) => ({
          type: 'Deposited',
          timestamp: deposit.timestamp,
          o_url: 'https://api.x.immutable.com/v1/deposits/' + deposit.transaction_id,
        }));
        allEvents.push(...depositEvents);
      }

      // Fetch withdrawals
      const withdrawalParams = {
        pageSize: 200,
        status: 'success' as const,
        tokenType: 'ERC721',
        tokenAddress: token_address,
        tokenId: token_id,
      };

      const withdrawalResponse = await fetchWithdrawalsAll(withdrawalParams);

      if (withdrawalResponse && withdrawalResponse) {
        // Process withdrawal events
        const withdrawalEvents = withdrawalResponse.map((withdrawal) => ({
          type: 'Withdrawn',
          timestamp: withdrawal.timestamp,
          o_url: 'https://api.x.immutable.com/v1/withdrawals/' + withdrawal.transaction_id
        }));
        allEvents.push(...withdrawalEvents);
      }

      // Fetch transfers
      const transferParams = {
        pageSize: 200,
        status: 'success' as const,
        tokenType: 'ERC721',
        tokenAddress: token_address,
        tokenId: token_id,
      };

      const transferResponse = await fetchTransfersAll(transferParams);

      if (transferResponse && transferResponse) {
        // Process transfer events
        const transferEvents = transferResponse.map((transfer) => ({
          type: 'Transferred',
          timestamp: transfer.timestamp,
          o_url: 'https://api.x.immutable.com/v1/transfers/' + transfer.transaction_id,
        }));
        allEvents.push(...transferEvents);
      }

      // Ensure all timestamp values are strings and not null
      const validatedEvents = allEvents.filter(event => event.timestamp != null).map(event => ({
        ...event,
        timestamp: event.timestamp as string
      }));

      // Sort the events by timestamp in ascending order
      validatedEvents.sort((a, b) => a.timestamp.localeCompare(b.timestamp));

      setEvents(validatedEvents);
      setLoading(false);
    };

    fetchEvents();
  }, [token_address, token_id]);

  if (loading) {
    return <Spinner />;
  }

  return ( 
    <Table size="sm">
      <Thead>
        <Tr>
          <Th color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>Event</Th>
          <Th color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>Date</Th>
          <Th color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>API</Th>
        </Tr>
      </Thead>
      <Tbody>
        {events.map((event, index) => (
          <Tr key={index}>
            <Td borderColor={'whiteAlpha.500'} fontSize={'xs'} fontStyle={'monospace'}>{event.type}</Td>
            <Td borderColor={'whiteAlpha.500'} fontSize={'xs'} fontStyle={'monospace'}>{event.timestamp}</Td>
            <Td borderColor={'whiteAlpha.500'} fontSize={'xs'} fontStyle={'monospace'}><Link href={event.o_url} isExternal ><ExternalLinkIcon mx='2px' /></Link></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default NFTHistory;
