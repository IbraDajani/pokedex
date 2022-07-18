import React from 'react';
import {FlatList, StatusBar} from 'react-native';
import {
  Container,
  FlatListContainer,
  BackgroundImage,
  HeaderTitle,
} from './styles';
import PokemonCard from './localComponents/PokemonCard';
import {apiJSON} from '~/utils/apiMockData';
import Separator from '~/components/Separator';
import HeaderLabel from './localComponents/HeaderLabel';
import pokeBallImage from '~/assets/images/pokeball.png';

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <BackgroundImage source={pokeBallImage} />
      <HeaderLabel />
      <HeaderTitle>Pokedex</HeaderTitle>
      <FlatListContainer>
        <FlatList
          data={apiJSON}
          renderItem={({item}) => <PokemonCard item={item} />}
          keyExtractor={(item, index) => `${item.id}-${index}-pokemon`}
          numColumns={2}
          ItemSeparatorComponent={() => <Separator height={8} />}
          showsVerticalScrollIndicator={false}
        />
      </FlatListContainer>
    </Container>
  );
};

export default Home;
