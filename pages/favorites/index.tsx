import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemon - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;

/*  <Grid.Container gap={2} justify="flex-start" direction="row">
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
        </Grid.Container> */
