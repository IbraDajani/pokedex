import {PokemonDTO} from '~/@types/dtos/pokemonDTO';

export type Props = {
  item: PokemonDTO | undefined;
};

export interface ColorProps {
  backgroundColor?: string;
  isLeft?: boolean;
  style?: string;
}
