import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Internal from '../../screens/Internal';
import Login from '../../screens/Login';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator screenOptions={{}}>
      <Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Screen name="Internal" component={Internal} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default Routes;
