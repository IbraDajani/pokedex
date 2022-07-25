import React, {useState} from 'react';
import {Pressable, StatusBar, View} from 'react-native';
import {PokemonDTO} from '~/@types/dtos/pokemonDTO';
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
  PokemonBoxImage,
  PokemonName,
  PokemonType,
  PokemonImage,
  PokemonBackgroundImage,
  StatsBox,
  ContainerConfig,
  OptionButton,
  DetailOptionButton,
  DetailOptionButtonBackground,
} from './styles';
import pokeball from '~/assets/images/pokeball.png';
import {PokemonStats} from './mocks';
import About from './localComponents/About';
import BaseStats from './localComponents/BaseStats';
import {useNavigation} from '@react-navigation/native';

const Internal = ({route}: any) => {
  //FIXME ADD ITEM PARAMS TO ROUTE TYPE
  const {item}: PokemonDTO = route.params;
  const {getBackgroundColorByType} = useColorByType({item});
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [likeOption, setlikeOption] = useState(false);
  const {goBack} = useNavigation();

  return (
    <Container BGColor={getBackgroundColorByType}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <ContainerConfig>
        <Header>
          <Pressable onPress={goBack}>
            <Icon icon="arrowLeft" activeColor="white" />
          </Pressable>
          <Pressable onPress={() => setlikeOption(!likeOption)}>
            <Icon icon={likeOption ? 'like' : 'redLike'} />
          </Pressable>
        </Header>
        <Separator height={20} />
        <RowBetween>
          <PokemonDetailsContainer>
            <PokemonName>{item?.name}</PokemonName>
            <RowBetween>
              <Text />
              <Text isBold color="white" size={15}>
                #{item?.num}
              </Text>
            </RowBetween>

            <Row>
              <PokemonType>{item?.type?.[0]}</PokemonType>
              <Separator width={10} />
              {item?.type?.[1] && <PokemonType>{item?.type?.[1]}</PokemonType>}
            </Row>
          </PokemonDetailsContainer>
        </RowBetween>
        <Separator height={20} />
        <PokemonBoxImage>
          <PokemonImage source={{uri: item?.img}} />
          <PokemonBackgroundImage source={pokeball} />
        </PokemonBoxImage>
      </ContainerConfig>

      <StatsBox>
        <Separator height={10} />

        <RowBetween>
          {PokemonStats.map(item => {
            return (
              <View key={item.id}>
                <OptionButton
                  isActive={selectedOption === item.id}
                  onPress={() => setSelectedOption(item.id)}>
                  <Text
                    isBold
                    color={selectedOption === item.id ? 'black' : '#bec1c4'}>
                    {item.label}
                  </Text>
                  <Separator height={20} />
                </OptionButton>
                {selectedOption === item.id ? <DetailOptionButton /> : null}
              </View>
            );
          })}
        </RowBetween>
        <DetailOptionButtonBackground />
        <Separator height={20} />
        {selectedOption === 1 ? (
          <About item={item} />
        ) : (
          <BaseStats item={item} />
        )}
      </StatsBox>
    </Container>
  );
};

export default Internal;
