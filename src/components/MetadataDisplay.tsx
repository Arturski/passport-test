import React from 'react';
import { Table, Th, Thead, Tr, Td } from '@chakra-ui/react';

interface MetadataDisplayProps {
  metadata: { [key: string]: any };
}

const MetadataDisplay: React.FC<MetadataDisplayProps> = ({ metadata }) => {
  // Function to render values properly
  const renderValue = (value: any): React.ReactNode => {
    if (Array.isArray(value)) {
      return value.join(', '); // Join arrays with comma
    } else if (typeof value === 'object' && value !== null) {
      // Convert object to string or React elements
      return JSON.stringify(value, null, 2); // You might want to implement a custom rendering logic for objects
    } else if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    } else {
      return String(value);
    }
  };

  return (
    <Table fontFamily={'monospace'} fontSize={'xs'} size={'xs'}>
      <Thead>
        {Object.entries(metadata).map(([key, value]) => (
          <Tr key={key}>
            <Th borderColor={'whiteAlpha.500'} width={'100px'} textAlign={'right'} color={'whiteAlpha.600'} fontSize={'xs'} fontStyle={'monospace'}>
              {key}
            </Th>
            <Td borderColor={'whiteAlpha.500'} pl={3}>
              {renderValue(value)}
            </Td>
          </Tr>
        ))}
      </Thead>
    </Table>
  );
};

export default MetadataDisplay;
