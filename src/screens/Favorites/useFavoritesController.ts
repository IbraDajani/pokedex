import {DrawerActions, useNavigation} from '@react-navigation/native';

const useFavoritesController = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return {openDrawer};
};

export default useFavoritesController;
