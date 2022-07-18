import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {Container} from './styles';
import PokemonCard from './localComponents/PokemonCard';
import {apiJSON} from '~/utils/apiMockData';
import Separator from '~/components/Separator';

const Home: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const numColumns = 2;

  return (
    <Container>
      <Animated.FlatList
        data={apiJSON}
        renderItem={({item, index}) => (
          <PokemonCard
            item={item}
            index={index}
            scrollY={scrollY}
            numColumns={numColumns}
          />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}-pokemon`}
        numColumns={numColumns}
        ItemSeparatorComponent={() => <Separator height={10} />}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollY},
              },
            },
          ],
          {useNativeDriver: true},
        )}
      />
    </Container>
  );
};

export default Home;
