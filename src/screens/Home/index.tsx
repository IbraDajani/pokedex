import React from 'react';
import {Pressable} from 'react-native';
import Text from '../../components/Text';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Pressable onPress={() => navigate('Internal')}>
        <Text size={40}>Home Screen</Text>
      </Pressable>
    </Container>
  );
};

export default Home;
