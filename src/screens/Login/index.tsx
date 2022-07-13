import React from 'react';
import {Container, HeaderImageLogo, HeaderLogo, LoginButton} from './styles';
import headerLogo from '../../assets/images/headerLogo.gif';
import Text from '../../components/Text';
import Separator from '../../components/Separator';

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
        <LoginButton>
          <Text>dsada</Text>
        </LoginButton>
        <Separator height={15} />
        <LoginButton>
          <Text>dsada</Text>
        </LoginButton>
        <Separator height={20} />
        <Text color="green" size={18}>
          Privacy Policy
        </Text>
      </HeaderLogo>
    </Container>
  );
};

export default Login;
