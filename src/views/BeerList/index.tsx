import { useEffect, useState } from 'react';
import { Beer } from '../../types';
import { fetchData } from './utils';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TableContent from '../../components/Table/TableContent';

const BeerList = () => {
  const navigate = useNavigate();
  const [beerList, setBeerList] = useState<Array<Beer>>([]);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  const onBeerClick = (id: string) => navigate(`/beer/${id}`);

  return (
    <article>
      <section>
        <header>
          <h1>BeerList page</h1>
        </header>
        <main>
          <Grid>
            <TableContent></TableContent>
          </Grid>
        </main>
      </section>
    </article>
  );
};

export default BeerList;
