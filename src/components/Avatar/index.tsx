import React from 'react';
import useAuth from '~/hooks/useAuth';
import {Container} from './styles';
import {Props} from './types';

const Avatar = ({style}: Props) => {
  const {googleUser} = useAuth();
  return (
    <Container
      size={82}
      name={googleUser?.name}
      src={googleUser?.photo}
      style={style}
    />
  );
};

export default Avatar;
