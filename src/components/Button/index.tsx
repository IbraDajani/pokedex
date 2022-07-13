import React from 'react';

import {ButtonProps} from './types';
import {Container} from './styles';
import Text from '../Text';

const Button = ({onPress, ...rest}: ButtonProps) => {
  return (
    <Container {...rest} onPress={onPress}>
      <Text>sdsadas</Text>
    </Container>
  );
};

export default Button;
