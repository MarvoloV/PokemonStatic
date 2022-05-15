import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemon - Favoritos">
      <NoFavorites />
    </Layout>
  );
};

export default FavoritesPage;
