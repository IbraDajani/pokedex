import React from 'react';
import Text from '../../components/Text';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

const Internal: React.FC = () => {
  const {goBack} = useNavigation();
  return (
    <Container>
      <Pressable onPress={goBack}>
        <Text size={40}>Internal Screen</Text>
      </Pressable>
    </Container>
  );
};

export default Internal;
