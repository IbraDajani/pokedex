import React from 'react';

import {Container, HeaderImageLogo, HeaderLogo} from './styles';

import Text from '../../components/Text';

import Separator from '../../components/Separator';

import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <HeaderImageLogo source={require('../../assets/images/headerLogo.gif')} />
      <HeaderLogo>
        <Separator height={100} />

        {/* <Text isBold size={20}>
          Sing up with
        </Text>

        <Separator height={20} />

        <Separator height={20} />

        <Text color="green" size={18}>
          Privacy Policy
        </Text> */}
        <Button>
          <Text>dsada</Text>
        </Button>

        <Separator height={15} />

        <Button>
          <Text>dsada</Text>
        </Button>
      </HeaderLogo>
    </Container>
  );
};

export default Login;
