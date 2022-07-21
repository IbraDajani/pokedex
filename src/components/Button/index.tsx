import React from 'react';
import {ButtonProps} from './types';
import {AbsoluteIcon, Container, Loading, Title} from './styles';
import Icon from '../Icon';
import pokeball from '../../assets/images/pokeball.png';
import useButtonController from './useButtonController';
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
  const {colorByMode, spin} = useButtonController(mode, color);

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
