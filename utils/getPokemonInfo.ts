import { pokeapi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (NameOrId: string) => {
  try {
    const { data } = await pokeapi.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${NameOrId}`
    );
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
