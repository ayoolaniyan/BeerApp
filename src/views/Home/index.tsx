import { useEffect, useState } from 'react';
import { fetchData } from './utils';
import { Beer } from '../../types';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Box, Container, Grid } from '@mui/material';
import CardGalaxy from '../../components/cards/card-galaxy';

const Home = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeerList), []);

  return (
    <article>
      <section>
        <main>
          <Box
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
              }}
            >
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
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={2}>
                {beerList.map((beer, index) => (
                  <Grid item key={index.toString()} xs={12} sm={6} md={4}>
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      <CardGalaxy title={beer.name} type={beer.brewery_type}></CardGalaxy>
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
