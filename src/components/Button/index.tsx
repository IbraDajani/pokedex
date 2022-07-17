import React, {useMemo} from 'react';
import {ButtonProps} from './types';
import {AbsoluteIcon, Container, Loading, Title} from './styles';
import Icon from '../Icon';
import pokeball from '../../assets/images/pokeball.png';
import {Animated, Easing} from 'react-native';
const Button = ({
  onPress,
  children,
  icon,
  loading,
  shadow,
  mode = 'contained',
  color = 'red',

  ...rest
}: ButtonProps) => {
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

  return (
    <Container
      borderColor={color}
      mode={mode}
      color={color}
      onPress={onPress}
      disabled={loading}
      shadow={shadow}
      {...rest}>
      {!!icon && (
        <AbsoluteIcon>
          <Icon icon={icon} size={20} activeColor="black" />
        </AbsoluteIcon>
      )}
      <Title color={colorByMode}>{children}</Title>
      {loading && (
        <Loading style={{transform: [{rotate: spin}]}} source={pokeball} />
      )}
    </Container>
  );
};

export default Button;
