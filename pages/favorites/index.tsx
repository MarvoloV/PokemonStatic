import { Card, Grid } from '@nextui-org/react';
import { NextPage } from 'next';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';

const FavoritesPage: NextPage = () => {
  const router = useRouter();
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  const onPokemonClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Layout title="Pokemon - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} justify="flex-start" direction="row">
          {favoritePokemons.map((id) => (
            <Grid
              key={id}
              xs={6}
              sm={3}
              md={2}
              xl={1}
              onClick={() => {
                onPokemonClick(id);
              }}
            >
              <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={'100%'}
                  height="140px"
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritesPage;
