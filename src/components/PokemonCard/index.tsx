import React, {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import Separator from '../Separator';
import {
  BackgroundImg,
  Container,
  Img,
  TextDummy,
  TextName,
  TextType,
} from './styles';
import {Props} from './types';
import pokeBallImage from '../../assets/images/pokeball.png';
import {colorByTypes} from '../../utils/apiMockData';

const PokemonCard = ({item}: Props) => {
  const {navigate} = useNavigation();
  const getBackgroundColorByType = useMemo(() => {
    if (!item) {
      return;
    }
    return colorByTypes[item.type[0]];
  }, [item]);

  const checkIfItemIsLeft = useMemo(() => {
    return item?.id % 2 !== 0;
  }, [item]);

  return (
    <Container
      onPress={() => navigate('Internal', {item})}
      isLeft={checkIfItemIsLeft}
      backgroundColor={getBackgroundColorByType}>
      <BackgroundImg source={pokeBallImage} />
      <Img source={{uri: item?.img}} />
      <TextName>{item?.name}</TextName>
      <Separator height={10} />
      <TextType>{item?.type[0]}</TextType>
      <Separator height={5} />
      {item?.type?.[1] ? <TextType>{item?.type?.[1]}</TextType> : <TextDummy />}
    </Container>
  );
};

export default PokemonCard;
