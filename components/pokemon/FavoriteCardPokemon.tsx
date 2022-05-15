import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  console.log(
    '🚀 ~ file: FavoriteCardPokemon.tsx ~ line 10 ~ pokemonId',
    pokemonId
  );
  const router = useRouter();
  const onPokemonClick = () => {
    router.push(`/pokemon/${pokemonId}`);
  };
  return (
    <Grid
      /* key={pokemonId} */
      xs={6}
      sm={3}
      md={2}
      xl={1}
      onClick={() => {
        onPokemonClick();
      }}
    >
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height="140px"
        />
      </Card>
    </Grid>
  );
};
