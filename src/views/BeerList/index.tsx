import { useEffect, useState } from 'react';
import { Beer } from '../../types';
import { fetchData } from './utils';
import { Grid, TablePagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TableContent from '../../components/Table/TableContent';

const BeerList = () => {
  const navigate = useNavigate();
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const [rowsPerpage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  const onBeerClick = (id: string) => navigate(`/beer/${id}`);

  const [orderDirection, setOrderDirection] = useState<Order>();
    const [valueToOrderBy, setValueToOrderBy] = useState('name');

    const handleRequestSort = (event: any, property: any) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }
    
    type Order = 'asc' | 'desc' | undefined;

  return (
    <article>
      <section>
        <header>
          <h1>BeerList page</h1>
        </header>
        <main>
          <Grid>
            <TableContent 
            valueToOrderBy={valueToOrderBy} 
            orderDirection={orderDirection} 
            handleRequestSort={handleRequestSort} 
            arrayList={beerList} 
            ></TableContent>
          </Grid>
        </main>
      </section>
    </article>
  );
};

export default BeerList;
