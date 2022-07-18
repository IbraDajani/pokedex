import React from 'react';
import Text from '~/components/Text';
import {Container} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, Pressable} from 'react-native';
import {RoutePokemonDTO} from '../../@types/dtos/pokemonDTO';

const Internal: React.FC = () => {
  const {item}: RoutePokemonDTO = useRoute().params;
  const {goBack} = useNavigation();
  return (
    <Container>
      <Pressable onPress={goBack}>
        <Image style={{height: 300, width: 300}} source={{uri: item?.img}} />
        <Text size={20}>{item?.name}</Text>
        <Text>{item?.type?.[0]}</Text>
        <Text>{item?.next_evolution?.[0].name}</Text>
      </Pressable>
    </Container>
  );
};

export default Internal;
