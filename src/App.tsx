import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Icon from './components/Icon';

const App: React.FC = () => {
  return (
    <View>
      <Icon icon="filter" activeColor="black" />
    </View>
  );
};

export default App;
