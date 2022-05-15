import React, { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start" direction="row">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
