import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './context/Auth';
import Routes from './navigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
