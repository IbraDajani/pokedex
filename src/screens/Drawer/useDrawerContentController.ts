import {useNavigation} from '@react-navigation/native';
import {Animated, Easing} from 'react-native';

const useButtonDrawerController = () => {
  const {navigate} = useNavigation();
  const handleNavigateToHome = () => {
    navigate('Home');
  };
  const handleNavigateToFavorites = () => {
    navigate('Favorites');
  };

  const spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
  return {handleNavigateToHome, handleNavigateToFavorites, spin};
};

export default useButtonDrawerController;
