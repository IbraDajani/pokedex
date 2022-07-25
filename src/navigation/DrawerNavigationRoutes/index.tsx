/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Home from '~/screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from '~/screens/Favorites';
import DrawerContent from '~/screens/Drawer/DrawerContent';
import useDrawerNavigationController from './useDrawerNavigationController';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerRoutes = () => {
  const {screenOptions} = useDrawerNavigationController();
  return (
    <Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={screenOptions}>
      <Screen name="Home" component={Home} />
      <Screen
        options={{swipeEnabled: false}}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  );
};

export default DrawerRoutes;
