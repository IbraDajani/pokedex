import React from 'react';
import {RoutePokemonDTO} from '~/@types/dtos/pokemonDTO';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import {
  PokemonBoxStats,
  PokemonStatsInfo,
  PokemonStatsInfoResults,
} from './styles';

const About = ({item}: RoutePokemonDTO) => {
  return (
    <PokemonBoxStats>
      <PokemonStatsInfo>
        <Text color="#5c6a70">Species</Text>
        <Text color="#5c6a70">Height</Text>
        <Text color="#5c6a70">Weight</Text>
        <Text color="#5c6a70">Abilities</Text>
        <Separator />
        <Text isBold>Breeding</Text>
        <Text color="#5c6a70">Gender</Text>
        <Text color="#5c6a70">Egg Groups</Text>
        <Text color="#5c6a70">Egg Cycle</Text>
      </PokemonStatsInfo>
      <PokemonStatsInfoResults>
        <Text isBold>{item?.type[0]}</Text>
        <Text isBold>{item?.height}</Text>
        <Text isBold>{item?.weight}</Text>
        <Text isBold />
        <Text />
        <Text isBold />
        <Text isBold>{item?.egg}</Text>
        <Text isBold />
      </PokemonStatsInfoResults>
    </PokemonBoxStats>
  );
};

export default About;
