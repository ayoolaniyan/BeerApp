import { useEffect, useState } from 'react';
import { Beer as IBeer } from '../../types';
import { fetchData } from './utils';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { CardNews2 } from '../../components/cards/card-news2';
import { CardPost } from '../../components/cards/card-post';

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  return (
    <article>
      <section>
        <main>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 1)',
              pt: 8,
              pb: 6,
            }}
          >
          <Container sx={{ py: 8, pt: 8 }} maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Container maxWidth="sm">
                  <Box sx={{ height: '50vh' }}>
                    <CardNews2></CardNews2>
                  </Box>
                </Container>
              </Grid>
              <Grid item xs={6}>
                <Container maxWidth="sm">
                  <Box sx={{ height: '50vh' }}>
                  <CardPost title={beer?.name} type={beer?.brewery_type}></CardPost>
                  </Box>
                </Container>
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