import React from 'react';
import Home from '../../screens/Home';
import Internal from '../../screens/Internal';
import {createDrawerNavigator} from '@react-navigation/drawer';

const {Navigator, Screen} = createDrawerNavigator();

const SignedInRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Internal" component={Internal} />
    </Navigator>
  );
};

export default SignedInRoutes;
