import React from 'react';
import icons from '../../constants/icons';
import {Container} from './styles';
import {IconProps} from './types';

const Icon = ({
  icon,
  activeColor,
  size = 20,
  style,
}: Omit<IconProps, 'source'>) => {
  if (activeColor) {
    return (
      <Container
        size={size}
        source={icons[icon]}
        style={[{tintColor: activeColor}, style]}
        resizeMode="contain"
      />
    );
  }
  return (
    <Container
      size={size}
      source={icons[icon]}
      style={style}
      resizeMode="contain"
    />
  );
};

export default Icon;
