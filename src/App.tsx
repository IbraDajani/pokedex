import React from 'react';
import styled from 'styled-components/native';
import Home from './screens/Home';

export const Container = styled.View`
  flex: 1;
`;

// import { Container } from './styles';

const App: React.FC = () => {
  return <Home />;
};

export default App;
