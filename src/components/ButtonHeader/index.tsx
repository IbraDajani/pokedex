import React from 'react';
import {Container} from './styles';
import {ButtonHeaderProps} from './types';
import Icon from '../Icon';
const ButtonHeader = ({icon, onPress, color, ...rest}: ButtonHeaderProps) => {
  return (
    <Container onPress={onPress} {...rest}>
      {!!icon && <Icon icon={icon} size={36} activeColor={color} />}
    </Container>
  );
};

export default ButtonHeader;
