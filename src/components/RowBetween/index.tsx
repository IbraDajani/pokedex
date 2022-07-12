import React from 'react';

import {Container} from './styles';
import {Props} from './types';

const RowBetween = ({children, style}: Props) => {
  return <Container style={style}>{children}</Container>;
};

export default RowBetween;
