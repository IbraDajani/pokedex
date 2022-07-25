import React from 'react';
import {RoutePokemonDTO} from '~/@types/dtos/pokemonDTO';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import {
  PokemonBoxStats,
  PokemonStatsInfo,
  PokemonStatsInfoResults,
  PokemonTextStyle,
} from './styles';

const About = ({item}: RoutePokemonDTO) => {
  return (
    <PokemonBoxStats>
      <PokemonStatsInfo>
        <PokemonTextStyle>Species</PokemonTextStyle>
        <PokemonTextStyle>Height</PokemonTextStyle>
        <PokemonTextStyle>Weight</PokemonTextStyle>
        <PokemonTextStyle>Abilities</PokemonTextStyle>
        <Separator />
        <Text isBold>Breeding</Text>
        <PokemonTextStyle>Gender</PokemonTextStyle>
        <PokemonTextStyle>Egg Groups</PokemonTextStyle>
        <PokemonTextStyle>Egg Cycle</PokemonTextStyle>
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
