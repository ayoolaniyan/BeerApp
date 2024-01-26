import { useEffect, useState } from 'react';
import { Beer } from '../../types';
import { fetchData } from './utils';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
          <nav aria-label="main mailbox folders">
            <List>
            {beerList.map((beer) => (
              <ListItem key={beer.id} disablePadding onClick={onBeerClick.bind(this, beer.id)}>
                <ListItemButton>
                  <ListItemIcon>
                    <img src="https://source.unsplash.com/random?wallpapers" />
                    </ListItemIcon>
                    <ListItemText>{beer.brewery_type}</ListItemText>
                  </ListItemButton>
                </ListItem>
                ))}
              </List>
          </nav>
        </main>
      </section>
    </article>
  );
};

export default BeerList;
