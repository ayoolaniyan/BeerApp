import { useEffect, useState } from 'react';
import { Beer as IBeer } from '../../types';
import { fetchData } from './utils';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { Card3 } from '../../components/cards/card-3';
import { Card4 } from '../../components/cards/card-4';

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();

  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), [id]);

  return (
    <article>
      <section>
        <main>
          <Container sx={{ py: 8, pt: 8 }} maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Container maxWidth="sm">
                  <Box sx={{ height: '70vh' }}>
                    <Card3></Card3>
                  </Box>
                </Container>
              </Grid>
              <Grid item xs={6}>
                <Container maxWidth="sm">
                  <Box sx={{ height: '70vh' }}>
                  <Card4 title={beer?.name} type={beer?.brewery_type}></Card4>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </main>
      </section>
    </article>
  );
};

export default Beer;