import {View, Text} from 'react-native';
import React from 'react';
import Header from '~/components/Header';
import {BackgroundImage, Container} from './styles';
import ButtonHeader from '~/components/ButtonHeader';
import Separator from '~/components/Separator';
import {useNavigation} from '@react-navigation/native';
import pokeBallImage from '~/assets/images/pokeball.png';

const Favorites = () => {
  const {goBack} = useNavigation();
  const navigation = useNavigation();
  return (
    <Container>
      <BackgroundImage source={pokeBallImage} />
      <Separator height={54} />
      <Header>
        <ButtonHeader icon="menu" onPress={() => navigation.toggleDrawer()} />
        <ButtonHeader icon="closedEye" onPress={() => goBack()} />
      </Header>
    </Container>
  );
};

export default Favorites;
