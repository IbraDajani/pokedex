/* eslint-disable react/no-unstable-nested-components */
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
import HeaderLabel from './localComponents/HeaderLabel';
import pokeBallImage from '~/assets/images/pokeball.png';
import RowBetween from '~/components/RowBetween';

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <RowBetween>
        <BackgroundImage source={pokeBallImage} />
        <HeaderLabel />
      </RowBetween>
      <Separator height={20} />
      <HeaderTitle>Pokedex</HeaderTitle>
      <Separator height={50} />
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
