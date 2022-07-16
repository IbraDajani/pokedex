import React from 'react';

import {Container} from './styles';
import {Props} from './types';

const Text = ({size = 14, color, isBold = false, children, ...rest}: Props) => {
  return (
    <Container size={size} color={color || 'black'} isBold={isBold} {...rest}>
      {children}
    </Container>
  );
};

export default Text;
