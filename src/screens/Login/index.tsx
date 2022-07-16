import React from 'react';

import {Container, HeaderImageLogo, HeaderLogo} from './styles';

import headerLogo from '../../assets/images/headerLogo.gif';

import Text from '../../components/Text';

import Separator from '../../components/Separator';

import Button from '../../components/Button';
import Loading from '../../components/Loading';

const Login: React.FC = () => {
  return (
    <Container>
      <HeaderLogo>
        <HeaderImageLogo
          source={require('../../assets/images/headerLogo.gif')}
        />

        <Separator height={100} />

        <Text isBold size={20}>
          Sing up with
        </Text>

        <Separator height={20} />

        <Button>
          <Text>dsada</Text>
        </Button>

        <Separator height={15} />

        <Button>
          <Text>dsada</Text>
        </Button>

        <Separator height={20} />

        <Text color="green" size={18}>
          Privacy Policy
        </Text>
      </HeaderLogo>
    </Container>
  );
};

export default Login;
