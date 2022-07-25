import React from 'react';
import Text from '~/components/Text';
import {
  PokemonBoxStats,
  PokemonStatsInfo,
  PokemonStatsInfoResults,
  PokemonStatBar,
  PokemonTextStyle,
} from './styles';

const BaseStats = () => {
  return (
    <PokemonBoxStats>
      <PokemonStatsInfo>
        <PokemonTextStyle>HP</PokemonTextStyle>
        <PokemonTextStyle>Attack</PokemonTextStyle>
        <PokemonTextStyle>Defense</PokemonTextStyle>
        <PokemonTextStyle>Sp.Atk</PokemonTextStyle>
        <PokemonTextStyle>Sp.Def</PokemonTextStyle>
        <PokemonTextStyle>Speed</PokemonTextStyle>
        <PokemonTextStyle>Total</PokemonTextStyle>
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
