import { useEffect, useState } from 'react';
import { Beer as IBeer } from '../../types';
import { fetchData } from './utils';
import { useParams } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Icon, Typography, createTheme } from '@mui/material';

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [beerList, setBeerList] = useState<Array<IBeer>>([]);

  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

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
          <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={2}>
          {/* {beerList.map((beer, index) => ( */}
            <Grid item xs={8}>
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
                </Card>
            </Grid>
            <Grid xs={4}>
            <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Name
                    </Typography>
                    <Typography>
                      Short description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Icon></Icon>
                  </CardActions>
                </Card>
            </Grid>
          </Grid>
        </Container>
        </Box>
        </main>
      </section>
    </article>
  );
};

export default Beer;
