import React, {useState} from 'react';
import {View} from 'react-native';
import {RouteName} from './localComponents/RouteNavigationButton/types';
import useButtonDrawerController from './useDrawerContentController';
import pokeBallImage from '~/assets/images/pokeball.png';
import Separator from '~/components/Separator';
import Icon from '~/components/Icon';
import Text from '~/components/Text';
import RouteNavigationButton from './localComponents/RouteNavigationButton';
import useAuth from '~/hooks/useAuth';

import {
  AvatarProfile,
  BackgroundImage,
  ButtonContainer,
  ButtonLogout,
  ButtonLogoutText,
  Container,
  Loading,
  ProfileContainer,
} from './styles';
const DrawerContent = () => {
  /**
   * Hooks
   */
  const {googleUser, handleGoogleSignOut, loading} = useAuth();
  const {handleNavigateToHome, handleNavigateToFavorites, spin} =
    useButtonDrawerController();
  /**
   * State
   */
  const [currentTab, setCurrentTab] = useState<RouteName>('Favorites');

  return (
    <Container>
      <ProfileContainer>
        <Separator height={30} />
        <AvatarProfile />
        <Separator height={10} />
        <Text size={16} isBold>
          Welcome
        </Text>
        <Text size={16} isBold>
          {googleUser?.familyName}
        </Text>
      </ProfileContainer>
      <ButtonContainer>
        <RouteNavigationButton
          onPress={handleNavigateToHome}
          icon="home"
          routeName="Home"
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
        <RouteNavigationButton
          onPress={handleNavigateToFavorites}
          icon="favorite"
          routeName="Favorites"
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
      </ButtonContainer>
      <View>
        <ButtonLogout onPress={handleGoogleSignOut}>
          {loading ? (
            <Loading
              style={{transform: [{rotate: spin}]}}
              source={pokeBallImage}
            />
          ) : (
            <Icon icon="logout" size={24} />
          )}
          <Separator width={10} />
          <ButtonLogoutText>Logout</ButtonLogoutText>
        </ButtonLogout>
      </View>
    </Container>
  );
};

export default DrawerContent;
