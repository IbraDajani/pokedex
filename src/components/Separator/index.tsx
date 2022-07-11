import React from 'react';

import {Container} from './styles';
import {Props} from './types';

const Separator = ({height, width}: Props) => {
  return <Container height={height} width={width} />;
};

export default Separator;
