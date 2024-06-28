import { Center, Table } from '@mantine/core';
import cropData from '../assets/data.json';
import { getAverageYieldAndArea } from '../utils/analysis';

const TableTwo: React.FC = () => {
  const data = getAverageYieldAndArea(cropData);

  return (
    <Table style={{marginTop:'50px'}} striped highlightOnHover withTableBorder withColumnBorders captionSide="top">
      <Table.Caption>Average Yield and Cultivation Area</Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th><Center>Crop</Center></Table.Th>
          <Table.Th><Center>Average Yield of the Crop between 1950-2020</Center></Table.Th>
          <Table.Th><Center>Average Cultivation Area of the Crop between 1950-2020</Center></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row, index) => (
          <Table.Tr key={index}>
            <Table.Td><Center>{row.crop}</Center></Table.Td>
            <Table.Td><Center>{row.avgYield}</Center></Table.Td>
            <Table.Td><Center>{row.avgArea}</Center></Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TableTwo;
