import React from 'react';
import {ButtonPress} from './styles';
import {ButtonHeaderProps} from './types';
import Icon from '../Icon';
const ButtonHeader = ({icon, onPress, color, ...rest}: ButtonHeaderProps) => {
  return (
    <ButtonPress onPress={onPress} {...rest}>
      {!!icon && <Icon icon={icon} size={36} activeColor={color} />}
    </ButtonPress>
  );
};

export default ButtonHeader;
