import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignInRoutes from './navigation/SignInRoutes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SignInRoutes />
    </NavigationContainer>
  );
};

export default App;
