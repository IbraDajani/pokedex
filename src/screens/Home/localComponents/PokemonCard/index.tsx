import React, {memo} from 'react';
import Separator from '../../../../components/Separator';
import {
  BackgroundImg,
  Container,
  Img,
  TextDummy,
  TextName,
  TextType,
} from './styles';
import {Props} from './types';
import pokeBallImage from '../../../../assets/images/pokeball.png';
import usePokemonCardController from './usePokemonCardController';

const PokemonCard = ({item}: Props) => {
  const {
    checkIfItemIsLeft,
    getBackgroundColorByType,
    handleNavigateToInternal,
  } = usePokemonCardController({item});

  return (
    <Container
      onPress={handleNavigateToInternal}
      isLeft={checkIfItemIsLeft}
      backgroundColor={getBackgroundColorByType}>
      <BackgroundImg source={pokeBallImage} />
      <Img source={{uri: item?.img}} />
      <TextName>{item?.name}</TextName>
      <Separator height={10} />
      <TextType>{item?.type?.[0]}</TextType>
      <Separator height={5} />
      {item?.type?.[1] ? <TextType>{item?.type?.[1]}</TextType> : <TextDummy />}
    </Container>
  );
};

export default memo(PokemonCard);
