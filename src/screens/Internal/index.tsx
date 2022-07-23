import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {RoutePokemonDTO} from '~/@types/dtos/pokemonDTO';
import Icon from '~/components/Icon';
import Row from '~/components/Row';
import RowBetween from '~/components/RowBetween';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useColorByType from '~/hooks/useColorByType';
import {
  Container,
  Header,
  PokemonDetailsContainer,
  PokemonName,
  PokemonType,
} from './styles';

const Internal = ({route}: any) => {
  const {item} = route.params;
  const {getBackgroundColorByType} = useColorByType({item});
  return (
    <Container BGColor={getBackgroundColorByType}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Header>
        <Pressable>
          <Icon icon="arrowLeft" activeColor="white" />
        </Pressable>
        <Pressable>
          <Icon icon="like" activeColor="white" />
        </Pressable>
      </Header>
      <RowBetween>
        <PokemonDetailsContainer>
          <PokemonName>{item?.name}</PokemonName>
          <Separator height={10} />
          <Row>
            <PokemonType>{item?.type?.[0]}</PokemonType>
            <Separator width={10} />
            {item?.type?.[1] && <PokemonType>{item?.type?.[1]}</PokemonType>}
          </Row>
        </PokemonDetailsContainer>
        <Text>{item?.num}</Text>
      </RowBetween>
    </Container>
  );
};

export default Internal;
