import React from 'react';
import Home from '~/screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from '~/screens/Favorites';
import {NavigationContainer} from '@react-navigation/native';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Favorites" component={Favorites} />
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoutes;
