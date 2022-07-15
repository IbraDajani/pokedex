import React from 'react';
import {FlatList, StatusBar} from 'react-native';
import {Container} from './styles';
import PokemonCard from '../../components/PokemonCard';
import {apiJSON} from '../../utils/apiMockData';
import Separator from '../../components/Separator';

const Home: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Container>
        <FlatList
          data={apiJSON}
          renderItem={({item}) => <PokemonCard item={item} />}
          keyExtractor={(item, index) => `${item.id}-${index}-pokemon`}
          numColumns={2}
          ItemSeparatorComponent={() => <Separator height={10} />}
        />
      </Container>
    </>
  );
};

export default Home;
