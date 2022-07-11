import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Icon from './components/Icon';

export const Container = styled.View`
  flex: 1;
`;

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <View>
      <Icon icon="filter" activeColor="black" />
    </View>
  );
};

export default App;
