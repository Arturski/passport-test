import { useEffect, useState } from 'react';
import {
  Box,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { fetchOrdersAll, fetchDepositsAll, fetchTransfersAll, fetchWithdrawalsAll, fetchMintsAll } from '../helpers/ImmutableFunctions';
import { bigNumberToDecimal } from '../helpers/CurrencyData';

// Define a type for the events
type WalletEvent = {
  type: string;
  timestamp: string | null;
  api_url: string;
  quantity: string | number;
  token_type: string;
};

const WalletHistory = ({ address }: { address: string }) => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<WalletEvent[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      try {
        const allEvents: WalletEvent[] = [];

        // Fetch orders
        const orderParams = {
          pageSize: 200,
          user: address,
        };

        const orderResponse = await fetchOrdersAll(orderParams);

        if (orderResponse) {
          const orderEvents = orderResponse.map((order) => {
            let type = '';
            let o_url = 'https://api.x.immutable.com/v3/orders/' + order.order_id + '?include_fees=true';
            let quantity: string | number = ''; // Initialize quantity with a type
            let token_type = '';

            if (order.maker_taker_type === 'maker' && (order.sell.type === 'ETH' || order.sell.type === 'ERC20')) {
              type = 'Offer Made';
              quantity = bigNumberToDecimal(order.sell.data.quantity, String(order.sell.data.decimals));
              token_type = order.buy.type;
            } else if (order.maker_taker_type === 'maker' && order.sell.type === 'ERC721') {
              type = 'Sell';
              quantity = bigNumberToDecimal(order.buy.data.quantity, String(order.buy.data.decimals));
              token_type = order.sell.type;
            } else if (order.maker_taker_type === 'taker' && order.sell.type === 'ERC721' && order.status === 'filled') {
              type = 'Offer Accept';
              quantity = bigNumberToDecimal(order.buy.data.quantity, String(order.buy.data.decimals));
              token_type = order.sell.type;
            } else if (order.maker_taker_type === 'taker' && (order.sell.type === 'ETH' || order.sell.type === 'ERC20')) {
              type = 'Buy';
              quantity = bigNumberToDecimal(order.buy.data.quantity, String(order.buy.data.decimals));
              token_type = order.sell.type;
            }

            return {
              type,
              timestamp: order.timestamp,
              api_url: o_url,
              quantity,
              token_type,
            };
          });

          allEvents.push(...orderEvents);
        }

        // Fetch deposits
        const depositParams = {
          pageSize: 200,
          status: 'success',
          user: address,
        };

        const depositResponse = await fetchDepositsAll(depositParams);

        if (depositResponse && depositResponse) {
          // Process deposit events
          const depositEvents = depositResponse.map((deposit) => ({
            type: 'Deposit',
            timestamp: deposit.timestamp,
            api_url: 'https://api.x.immutable.com/v1/deposits/' + deposit.transaction_id,
            quantity: bigNumberToDecimal(deposit.token.data.quantity, String(deposit.token.data.decimals)),
            token_type: deposit.token.type,
          }));
          allEvents.push(...depositEvents);
        }

        // Fetch withdrawals
        const withdrawalParams = {
          pageSize: 200,
          status: 'success',
          user: address,
        };

        const withdrawalResponse = await fetchWithdrawalsAll(withdrawalParams);

        if (withdrawalResponse && withdrawalResponse) {
          // Process withdrawal events
          const withdrawalEvents = withdrawalResponse.map((withdrawal) => ({
            type: 'Withdrawal',
            timestamp: withdrawal.timestamp,
            api_url: 'https://api.x.immutable.com/v1/withdrawals/' + withdrawal.transaction_id,
            quantity: bigNumberToDecimal(withdrawal.token.data.quantity, String(withdrawal.token.data.decimals)),
            token_type: withdrawal.token.type,
          }));
          allEvents.push(...withdrawalEvents);
        }

        // Fetch transfers
        const transferParams = {
          pageSize: 200,
          status: 'success' as const,
          user: address,
        };

        const transferResponse = await fetchTransfersAll(transferParams);

        if (transferResponse && transferResponse) {
          // Process transfer events
          const transferEvents = transferResponse.map((transfer) => ({
            type: 'Transfer Out',
            timestamp: transfer.timestamp,
            api_url: 'https://api.x.immutable.com/v1/transfers/' + transfer.transaction_id,
            quantity: bigNumberToDecimal(transfer.token.data.quantity, String(transfer.token.data.decimals)),
            token_type: transfer.token.type,
          }));
          allEvents.push(...transferEvents);
        }

        // Fetch transfers
        const receiveParams = {
          pageSize: 200,
          status: 'success' as const,
          receiver: address,
        };

        const receiveResponse = await fetchTransfersAll(receiveParams);

        if (receiveParams && receiveResponse) {
          // Process transfer events
          const receiveEvents = receiveResponse.map((transfer) => ({
            type: 'Received',
            timestamp: transfer.timestamp,
            api_url: 'https://api.x.immutable.com/v1/transfers/' + transfer.transaction_id,
            quantity: bigNumberToDecimal(transfer.token.data.quantity, String(transfer.token.data.decimals)),
            token_type: transfer.token.type,
          }));
          allEvents.push(...receiveEvents);
        }

        const mintParams = {
          pageSize: 200,
          status: 'success',
          user: address,
        };

        const mintResponse = await fetchMintsAll(mintParams);

        if (mintResponse) {
          // Process transfer events
          const mintEvents = mintResponse.map((mint) => ({
            type: 'Minted',
            timestamp: mint.timestamp,
            api_url: 'https://api.x.immutable.com/v1/mints/' + mint.transaction_id,
            quantity: mint.token.data.quantity,
            token_type: mint.token.type,
          }));
          allEvents.push(...mintEvents);
        }

        // Sort the events by timestamp in descending order
        allEvents.sort((a, b) => (new Date(b.timestamp ?? 0) as any) - (new Date(a.timestamp ?? 0) as any));

        setEvents(allEvents);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching wallet history:', error);
        setError('Failed to fetch wallet history.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [address]);

  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" minHeight="0.25fr">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" minHeight="0.25fr">
        <Text>{error}</Text>
      </Box>
    );
  }

  if (events.length === 0) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" minHeight="0.25fr">
        <Text>No wallet events to display.</Text>
      </Box>
    );
  }

  return (
    <Table size="sm">
      <Tbody>
        {events.map((event, index) => (
          <Tr key={index}>
            <Td>{new Date(event.timestamp ?? '').toLocaleString('en-US')}</Td>
            <Td>{event.type}</Td>
            <Td>{event.quantity}</Td>
            <Td>{event.token_type}</Td>
            <Td>
              <Link href={event.api_url} isExternal>
                <ExternalLinkIcon mx="2px" />
              </Link>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default WalletHistory;
