import React from 'react';
import {Container, HeaderImageLogo, HeaderLogo} from './styles';
import Separator from '~/components/Separator';
import Button from '~/components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <HeaderImageLogo source={require('~/assets/images/headerLogo.gif')} />
      <HeaderLogo>
        <Separator height={100} />
        <Button mode="outlined">Google</Button>
        <Separator height={15} />
        <Button>Create account</Button>
      </HeaderLogo>
    </Container>
  );
};

export default Login;
