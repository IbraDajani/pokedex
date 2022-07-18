import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '~/components/Icon';
import {Container, RowBetweenHome} from './styles';

const HeaderStyle = () => {
  return (
    <Container>
      <RowBetweenHome>
        {/* <TouchableOpacity>
          <Icon icon="logout" size={30} activeColor="white" />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Icon icon="menu" size={30} activeColor="black" />
        </TouchableOpacity>
      </RowBetweenHome>
    </Container>
  );
};

export default HeaderStyle;
