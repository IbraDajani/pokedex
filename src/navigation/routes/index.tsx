import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Internal from '../../screens/Internal';
import Login from '../../screens/Login';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Internal" component={Internal} />
    </Navigator>
  );
};

export default Routes;
