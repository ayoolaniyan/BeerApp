import { useEffect, useState } from 'react';
import { fetchData } from './utils';
import { Beer } from '../../types';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Box, Container, Grid } from '@mui/material';
import Card1 from '../../components/cards/card-1';

const Home = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  function getRows(beer: Beer[]): Beer[] {
    const rows: Beer[] = [];
      for (const item of beer) {
        if (item.brewery_type === "brewpub") {
          rows.push(item);
        }
      }
      return rows;
  }

  return (
    <article>
      <section>
        <main>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Favourite Beers
                </Typography>
              </Container>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={2}>
                {getRows(beerList).map((beer, index) => (
                  <Grid item key={index.toString()} xs={12} sm={6} md={4}>
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      <Card1 title={beer.name} type={beer.brewery_type}></Card1>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Container>
        </main>
      </section>
    </article>
  );
};

export default Home;
