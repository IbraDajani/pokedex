import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled(SafeAreaView)<{BGColor?: string}>`
  flex: 1;
  background-color: ${({BGColor}) => BGColor || 'transparent'};
`;

export const ContainerConfig = styled.View`
  padding: 20px;
  height: 45%;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const PokemonName = styled(Text).attrs({
  size: RFValue(40),
  color: 'white',
  isBold: true,
})``;

export const PokemonType = styled(Text).attrs({
  size: RFValue(12),
  color: 'white',
  isBold: true,
})`
  background-color: #ffffff60;
  min-width: 70px;
  max-width: 80px;
  padding: ${RFValue(3)}px;
  border-radius: 20px;
  text-align: center;
  opacity: 0.8;
`;
export const PokemonDetailsContainer = styled.View`
  width: 100%;
`;

export const PokemonBoxImage = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
  z-index: 1;
`;

export const PokemonBackgroundImage = styled.Image`
  width: 170px;
  height: 190px;
  position: absolute;
  right: -40px;
  opacity: 0.3;
  tint-color: white;
`;

export const StatsBox = styled.View`
  height: 60%;
  width: 100%;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 30px;
`;
export const OptionButton = styled.Pressable``;

export const DetailOptionButtonBackground = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ced0d2;
  position: static;
  bottom: 1px;
`;

export const DetailOptionButton = styled.View`
  height: 2px;
  width: 100%;
  background-color: #a3abe8;
`;
