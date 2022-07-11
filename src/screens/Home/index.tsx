import React from 'react';
import {View} from 'react-native';
import Icon from '../../components/Icon';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <View>
        <Icon icon="filter" activeColor="black" />
      </View>
    </Container>
  );
};

export default Home;
