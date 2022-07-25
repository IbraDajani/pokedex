import React from 'react';
import Internal from '~/screens/Internal';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerRoutes from '~/navigation/DrawerNavigationRoutes';

const {Navigator, Screen} = createNativeStackNavigator();

const SignedInRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Screen name="Internal" component={Internal} />
    </Navigator>
  );
};

export default SignedInRoutes;
