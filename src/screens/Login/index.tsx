import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Container, HeaderImageLogo, HeaderLogo} from './styles';
import Text from '../../components/Text';
import Separator from '../../components/Separator';
import Button from '../../components/Button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleUser} from './types';

const Login: React.FC = () => {
  /**
   * States
   */

  const [googleUser, setGoogleUser] = useState<GoogleUser>({} as GoogleUser);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Callbacks
   */

  const handleGoogleSignIn = useCallback(async () => {
    try {
      setLoading(true);
      const {user} = await GoogleSignin.signIn();
      console.log(user);
      setGoogleUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Effects
   */

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId:
        '224819431993-mgcka63re3b5juit5js2gslrlrgi0qvc.apps.googleusercontent.com',
    });
  }, []);

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
        <Button
          onPress={handleGoogleSignIn}
          loading={loading}
          shadow
          color="#FFFFFF"
          icon="google">
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
      </HeaderLogo>
    </Container>
  );
};

export default Login;
