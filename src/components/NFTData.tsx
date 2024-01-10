import { FC } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'; 
interface NFTDataProps {
  order_id?: string;
  owner: string;
  token_id: string;
  token_address: string;
  nft_created: string | null;
  order_created?: string;
}

const NFTData: FC<NFTDataProps> = ({
  order_id,
  owner,
  token_id,
  token_address,
  nft_created,
  order_created,
}) => {
  return (
    <Table fontFamily={'monospace'} fontSize={'xs'} size={'xs'}>
      <Thead>
        <Tr>
          <Th borderColor={'whiteAlpha.500'} textAlign={'right'} color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>
            Owner
          </Th>
          <Td borderColor={'whiteAlpha.500'} pl={3} title={owner}>
            {owner}
          </Td>
        </Tr>
        <Tr>
          <Th borderColor={'whiteAlpha.500'} textAlign={'right'} color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>
            Collection
          </Th>
          <Td borderColor={'whiteAlpha.500'} pl={3} title={token_address}> 
            {token_address}
          </Td>
        </Tr>
        <Tr>
          <Th borderColor={'whiteAlpha.500'} textAlign={'right'} color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>
            Token ID
          </Th>
          <Td borderColor={'whiteAlpha.500'} pl={3}>{token_id}</Td>
        </Tr>
        <Tr>
          <Th borderColor={'whiteAlpha.500'} textAlign={'right'} color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>
            Minted
          </Th>
          <Td borderColor={'whiteAlpha.500'} pl={3}>{nft_created}</Td>
        </Tr>
        <Tr>
          <Th borderColor={'whiteAlpha.500'} textAlign={'right'} color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>
            Order ID
          </Th>
          <Td borderColor={'whiteAlpha.500'} pl={3}>{order_id}</Td>
        </Tr>
        <Tr>
          <Th borderColor={'whiteAlpha.500'} textAlign={'right'} color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>
            Order Date
          </Th>
          <Td borderColor={'whiteAlpha.500'} pl={3}>{order_created}</Td>
        </Tr>
      </Thead>
      <Tbody>
        {/* The table body is now empty because the data is in the header */}
      </Tbody>
    </Table>
  );
};

export default NFTData;