import { useEffect, useState } from 'react';
import { fetchData } from './utils';
import { Beer } from '../../types';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, CardActions, CardContent, Card, CardMedia, Box, Container, Grid } from '@mui/material';

const Home = () => {
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const [savedList, setSavedList] = useState<Array<Beer>>([]);

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
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          pt: '56.25%',
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                      />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h6" component="h6">
                            {beer.name}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      Read More
                    </Link>
                        </CardActions>
                    </Card>
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
