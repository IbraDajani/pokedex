import React from 'react';
import Header from '~/components/Header';
import ButtonHeader from '~/components/ButtonHeader';
import Separator from '~/components/Separator';
import pokeBallImage from '~/assets/images/pokeball.png';
import {BackgroundImage, Container} from './styles';
import useFavoritesController from './useFavoritesController';

const Favorites = () => {
  const {openDrawer} = useFavoritesController();
  return (
    <Container>
      <BackgroundImage source={pokeBallImage} />
      <Separator height={54} />
      <Header>
        <ButtonHeader icon="menu" onPress={openDrawer} />
      </Header>
    </Container>
  );
};

export default Favorites;
