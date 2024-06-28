import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import TableOne from './components/TableOne';
import TableTwo from './components/TableTwo';

function App() {
  return (
    <>
    <MantineProvider>
    <h1 style={{textAlign:'center'}}>Crop Data Aggregation</h1>
      <TableOne />
      <TableTwo />
    </MantineProvider>
    </>
  )
}

export default App
