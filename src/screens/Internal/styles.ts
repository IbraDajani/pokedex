import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled(SafeAreaView)<{BGColor?: string}>`
  flex: 1;
  padding: 20px;
  background-color: ${({BGColor}) => BGColor || 'transparent'};
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const PokemonName = styled(Text).attrs({
  size: RFValue(30),
  color: 'white',
  isBold: true,
})``;

export const PokemonType = styled(Text).attrs({
  size: RFValue(12),
  color: 'white',
  isBold: true,
})`
  background-color: #ffffff60;
  min-width: 60px;
  max-width: 80px;
  padding: ${RFValue(2)}px;
  border-radius: 10px;
  text-align: center;
`;
export const PokemonDetailsContainer = styled.View`
  width: 100%;
  height: 200px;
`;
