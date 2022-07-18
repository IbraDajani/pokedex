import React, {useEffect} from 'react';
import Text from '~/components/Text';
import {Container} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {RoutePokemonDTO} from '~/@types/dtos/pokemonDTO';

const Internal: React.FC = () => {
  const {item, spinValue, stopAnimation}: RoutePokemonDTO = useRoute().params;
  const {goBack} = useNavigation();

  const resetPropsAnimation = () => {
    setTimeout(() => {
      stopAnimation();
      spinValue.setValue(0);
    }, 500);
  };

  useEffect(() => {
    resetPropsAnimation();
  }, []);

  return (
    <Container>
      <Pressable onPress={goBack}>
        <Text size={20}>{item?.name}</Text>
        <Text>{item?.type?.[0]}</Text>
        <Text>{item?.next_evolution?.[0].name}</Text>
      </Pressable>
    </Container>
  );
};

export default Internal;
