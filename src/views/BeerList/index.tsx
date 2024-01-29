import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Beer } from '../../types';
import { useEffect, useState } from 'react';
import { fetchData } from './utils';

interface TableData {
  id: string;
  name: string;
  brewery_type: string;
};

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Id',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'brewery_type',
    headerName: 'Brewery Type',
    width: 110,
    editable: true,
  },
];

function getRows(beer: Beer[]): TableData[] {
  const rows: TableData[] = [];
    for (const item of beer) {
      const row: TableData = {
        id: item.name,
        name: item.name,
        brewery_type: item.brewery_type,
      };
      rows.push(row);
    }
    return rows;
}

const DataGridDemo = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  console.log('data: ', beerList.map(item => item.address_1));
  
  return (
    <Box sx={{ height: 750, width: '100%' }}>
      <DataGrid rows={getRows(beerList)} columns={columns} />
    </Box>
  );
}
export default DataGridDemo;