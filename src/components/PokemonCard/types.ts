import {PokemonDTO} from '../../@types/dtos/pokemonDTO';

export interface Props {
  item: PokemonDTO;
}

export interface ColorProps {
  backgroundColor?: string;
  isLeft?: boolean;
}
