import React from 'react';
import {RoutePokemonDTO} from '~/@types/dtos/pokemonDTO';
import Text from '~/components/Text';
import {
  PokemonBoxStats,
  PokemonStatsInfo,
  PokemonStatsInfoResults,
  PokemonStatBar,
} from './styles';

const BaseStats = ({item}: RoutePokemonDTO) => {
  return (
    <PokemonBoxStats>
      <PokemonStatsInfo>
        <Text color="#5c6a70">HP</Text>
        <Text color="#5c6a70">Attack</Text>
        <Text color="#5c6a70">Defense</Text>
        <Text color="#5c6a70">Sp.Atk</Text>
        <Text color="#5c6a70">Sp.Def</Text>
        <Text color="#5c6a70">Speed</Text>
        <Text color="#5c6a70">Total</Text>
      </PokemonStatsInfo>
      <PokemonStatsInfoResults>
        <Text>20</Text>
        <Text>30</Text>
        <Text>40</Text>
        <Text>30</Text>
        <Text>30</Text>
        <Text>30</Text>
      </PokemonStatsInfoResults>
      <PokemonStatBar />
    </PokemonBoxStats>
  );
};

export default BaseStats;
