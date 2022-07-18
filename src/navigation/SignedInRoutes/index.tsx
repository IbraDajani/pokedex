import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Internal from '../../screens/Internal';

const {Navigator, Screen} = createNativeStackNavigator();

const SignedInRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Internal" component={Internal} />
    </Navigator>
  );
};

export default SignedInRoutes;
