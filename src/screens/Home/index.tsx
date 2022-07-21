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
import {useNavigation} from '@react-navigation/native';
import ButtonHeader from '~/components/ButtonHeader';

const Home: React.FC = () => {
  const {navigate} = useNavigation();
  const handlerNavigateToInternal = () => {
    navigate('Internal');
  };
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
        <ButtonHeader
          onPress={handlerNavigateToInternal}
          icon="menu"
          color="black"
        />
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
