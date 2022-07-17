import React from 'react';
import {StatusBar} from 'react-native';
import {Container, HeaderImageLogo, HeaderLogo} from './styles';
import Text from '../../components/Text';
import Separator from '../../components/Separator';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <HeaderImageLogo source={require('../../assets/images/headerLogo.gif')} />
      <Separator height={50} />
      <HeaderLogo>
        <Text color="#040403" isBold size={20}>
          Sing up with
        </Text>
        <Separator height={50} />
        <Button shadow color="#FFFFFF" icon="google">
          <Text size={20}>Login with Google</Text>
        </Button>
        <Separator height={20} />
        <Button shadow color="#FFFFFF">
          <Text size={20}>Pokémon Trainer Club</Text>
        </Button>
        <Separator height={50} />
        <Text color="#040403" size={18}>
          Privacy Policy
        </Text>
        {/* <Lottie source={Pokeball} autoPlay loop /> */}
      </HeaderLogo>
    </Container>
  );
};

export default Login;
