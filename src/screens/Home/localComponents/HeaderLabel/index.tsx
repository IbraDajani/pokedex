import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '~/components/Icon';
import {Container} from './styles';

const HeaderLabel = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Icon icon="menu" size={30} activeColor="black" />
      </TouchableOpacity>
    </Container>
  );
};

export default HeaderLabel;
