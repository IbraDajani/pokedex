import {useMemo} from 'react';
import {Animated, Easing} from 'react-native';

const useButtonController = (mode: string, color: string) => {
  const colorByMode = useMemo(() => {
    return mode === 'outlined' ? color : 'white';
  }, [mode, color]);

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
  return {colorByMode, spin};
};

export default useButtonController;
