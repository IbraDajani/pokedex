import {useNavigation, DrawerActions} from '@react-navigation/native';

const useHomeController = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return {openDrawer};
};

export default useHomeController;
