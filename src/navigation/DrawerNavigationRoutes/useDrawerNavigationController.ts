import {DrawerNavigationOptions} from '@react-navigation/drawer';
const useDrawerNavigationController = () => {
  const screenOptions = <DrawerNavigationOptions>{
    headerShown: false,
    drawerPosition: 'right',
    drawerType: 'slide',
    overlayColor: 'transparent',
    drawerStyle: {
      width: 205,
    },
  };
  return {screenOptions};
};

export default useDrawerNavigationController;
