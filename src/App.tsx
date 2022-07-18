import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignedInRoutes from './navigation/SignedInRoutes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SignedInRoutes />
    </NavigationContainer>
  );
};

export default App;
