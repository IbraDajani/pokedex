/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Home from '~/screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from '~/screens/Favorites';
import DrawerContent from '~/screens/Drawer/DrawerContent';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {
          width: 205,
        },
      }}>
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
