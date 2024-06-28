import { Center, Table } from '@mantine/core';
import cropData from '../assets/data.json';
import { getMaxAndMinProduction } from '../utils/analysis';

const TableOne: React.FC = () => {
  const data = getMaxAndMinProduction(cropData);

  return (
    <Table horizontalSpacing="xl" captionSide="top" striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Caption>Yearly Max/Min Crop Production</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th><Center>Year</Center></Table.Th>
          <Table.Th><Center>Crop with Maximum Production in that Year</Center></Table.Th>
          <Table.Th><Center>Crop with Minimum Production in that Year</Center></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row, index) => (
          <Table.Tr key={index}>
            <Table.Td><Center>{row.year.split(',')[1]}</Center></Table.Td>
            <Table.Td><Center>{row.maxCrop}</Center></Table.Td>
            <Table.Td><Center>{row.minCrop}</Center></Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TableOne;
