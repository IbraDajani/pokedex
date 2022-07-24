import styled from 'styled-components/native';
import Text from '~/components/Text';
import {ColorProps} from './types';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity<ColorProps>`
  width: 48%;
  height: 120px;
  border-radius: 24px;
  padding-top: 10px;
  padding-left: 10px;
  margin: 4px;
  background-color: ${({backgroundColor}) => backgroundColor || 'transparent'};
  position: relative;
  overflow: hidden;
`;

export const PokemonName = styled(Text).attrs({
  size: RFValue(14),
  color: 'white',
  isBold: true,
})``;

export const PokemonType = styled(Text).attrs({
  size: RFValue(10),
  color: 'white',
  isBold: true,
})`
  background-color: #ffffff60;
  min-width: 50px;
  max-width: 60px;
  border-radius: 10px;
  text-align: center;
`;

export const TextDummy = styled.View``;

export const Img = styled.Image`
  width: 90px;
  height: 90px;
  position: absolute;
  left: 90px;
  top: 30px;
`;
export const BackgroundImg = styled.ImageBackground`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 90px;
  top: 30px;
  opacity: 0.15;
`;
