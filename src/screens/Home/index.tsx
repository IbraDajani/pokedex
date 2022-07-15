/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList} from 'react-native';
import {Container} from './styles';
import PokemonCard from './localComponents/PokemonCard';
import {apiJSON} from '../../utils/apiMockData';
import Separator from '../../components/Separator';

const Home: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={apiJSON}
        renderItem={({item}) => <PokemonCard item={item} />}
        keyExtractor={(item, index) => `${item.id}-${index}-pokemon`}
        numColumns={2}
        ItemSeparatorComponent={() => <Separator height={10} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
