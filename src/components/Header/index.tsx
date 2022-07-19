import React from 'react';
import {Container} from './styles';
import {HeaderProps} from './types';

const Header = ({children}: HeaderProps) => {
  return <Container>{children}</Container>;
};

export default Header;
