import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {
  AvatarProfile,
  BackgroundImage,
  ButtonContainer,
  ButtonLogout,
  ButtonLogoutText,
  Container,
  ProfileContainer,
} from './styles';
import pokeBallImage from '~/assets/images/pokeball.png';
import useAuth from '~/hooks/useAuth';
import Separator from '~/components/Separator';
import Icon from '~/components/Icon';
import {useNavigation} from '@react-navigation/native';
import Text from '~/components/Text';
import {RouteName} from './localComponents/RouteNavigationButton/types';
import RouteNavigationButton from './localComponents/RouteNavigationButton';

const DrawerContent = () => {
  const {googleUser, handleGoogleSignOut, loading} = useAuth();
  const {navigate} = useNavigation();
  const [currentTab, setCurrentTab] = useState<RouteName>('Favorites');

  return (
    <Container>
      <BackgroundImage source={pokeBallImage} />
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
        {/* <TouchableOpacity
          onPress={() => Linking.openURL('https://hotmail.com')}>
          <Text size={10}>{googleUser?.email}</Text>
        </TouchableOpacity> */}
      </ProfileContainer>
      <ButtonContainer>
        <RouteNavigationButton
          onPress={() => navigate('Home')}
          icon="home"
          routeName="Home"
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
        <RouteNavigationButton
          onPress={() => navigate('Favorites')}
          icon="favorite"
          routeName="Favorites"
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
        <RouteNavigationButton
          onPress={() => {}}
          icon="darkmode"
          routeName="Dark Mode"
        />
      </ButtonContainer>
      <View>
        <ButtonLogout onPress={handleGoogleSignOut}>
          {loading ? (
            <ActivityIndicator color="red" />
          ) : (
            <Icon icon="logout" size={24} activeColor="red" />
          )}
          <Separator width={10} />
          <ButtonLogoutText color="red">Logout</ButtonLogoutText>
        </ButtonLogout>
      </View>
    </Container>
  );
};

export default DrawerContent;

// const TabButton = (currentTab, setCurrentTab, title, icon) => {
//   return (
//     <ButtonContainer
//       style={{
//         backgroundColor: currentTab == title ? 'black' : 'transparent',
//       }}>
//       <Icon
//         icon={icon}
//         activeColor={currentTab == title ? 'white' : 'black'}
//       />
//       <Separator width={10} />
//       <Text
//         size={15}
//         isBold={true}
//         color={currentTab == title ? 'white' : 'black'}>
//         {title}
//       </Text>
//     </ButtonContainer>
//   );
//   {
//     TabButton(currentTab, setCurrentTab, 'Home', 'home');
//   }
//   {
//     TabButton(currentTab, setCurrentTab, 'Favorites', 'like');
//   }
//   {
//     TabButton(currentTab, setCurrentTab, 'Settings', 'settings');
//   }
// };
