import React from 'react';
import {Pressable} from 'react-native';
import Icon from '~/components/Icon';
import {Container} from './styles';

const HeaderLabel = () => {
  return (
    <Container>
      <Pressable>
        <Icon icon="menu" size={30} activeColor="black" />
      </Pressable>
    </Container>
  );
};

export default HeaderLabel;
