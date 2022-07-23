import React, {memo} from 'react';
import Separator from '~/components/Separator';
import {
  BackgroundImg,
  Container,
  Img,
  TextDummy,
  PokemonName,
  PokemonType,
} from './styles';
import {Props} from './types';
import pokeBallImage from '~/assets/images/pokeball.png';
import usePokemonCardController from './usePokemonCardController';
import useColorByType from '~/hooks/useColorByType';

const PokemonCard = ({item}: Props) => {
  const {handleNavigateToInternal} = usePokemonCardController({item});
  const {getBackgroundColorByType} = useColorByType({item});

  return (
    <Container
      onPress={() => handleNavigateToInternal(item)}
      backgroundColor={getBackgroundColorByType}>
      <BackgroundImg source={pokeBallImage} />
      <Img source={{uri: item?.img}} />
      <PokemonName>{item?.name}</PokemonName>
      <Separator height={10} />
      <PokemonType>{item?.type?.[0]}</PokemonType>
      <Separator height={5} />
      {item?.type?.[1] ? (
        <PokemonType>{item?.type?.[1]}</PokemonType>
      ) : (
        <TextDummy />
      )}
    </Container>
  );
};

export default memo(PokemonCard);
