import React from 'react';
import {FlatList, StatusBar} from 'react-native';
import {
  Container,
  BackgroundImage,
  HeaderTitle,
  FlatListContainer,
} from './styles';
import PokemonCard from './localComponents/PokemonCard';
import {apiJSON} from '~/utils/apiMockData';
import Separator from '~/components/Separator';
import Header from '~/components/Header';
import pokeBallImage from '~/assets/images/pokeball.png';
import ButtonHeader from '~/components/ButtonHeader';
import useAuth from '~/hooks/useAuth';
import Loading from '~/components/Loading';

const Home: React.FC = () => {
  /**
   * Hooks
   */

  const {googleUser, handleGoogleSignOut, loading} = useAuth();

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Separator height={54} />
      <BackgroundImage source={pokeBallImage} />
      <Header>
        {loading ? (
          <Loading />
        ) : (
          <ButtonHeader
            onPress={handleGoogleSignOut}
            icon="menu"
            color="black"
          />
        )}
      </Header>
      <Separator height={40} />
      <HeaderTitle>Pokedex</HeaderTitle>
      <Separator height={30} />
      <FlatListContainer>
        <FlatList
          data={apiJSON}
          renderItem={({item}) => <PokemonCard item={item} />}
          keyExtractor={(item, index) => `${item.id}-${index}-pokemon`}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </FlatListContainer>
    </Container>
  );
};

export default Home;
