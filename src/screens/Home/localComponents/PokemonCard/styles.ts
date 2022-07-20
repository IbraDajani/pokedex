import styled from 'styled-components/native';
import Text from '~/components/Text';
import {ColorProps} from './types';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity<ColorProps>`
  width: ${RFValue(150)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(20)}px;
  padding-top: ${RFValue(10)}px;
  padding-left: ${RFValue(10)}px;
  margin: ${RFValue(4)}px;
  background-color: ${({backgroundColor}) => backgroundColor || 'transparent'};
  position: relative;
  overflow: hidden;
`;

export const TextName = styled(Text).attrs({
  size: RFValue(14),
  color: 'white',
  isBold: true,
})``;

export const TextType = styled(Text).attrs({
  size: RFValue(10),
  color: 'white',
  isBold: true,
})`
  background-color: #ffffff60;
  min-width: ${RFValue(40)}px;
  max-width: ${RFValue(50)}px;
  border-radius: ${RFValue(10)}px;
  text-align: center;
`;

export const TextDummy = styled.View``;

export const Img = styled.Image`
  width: ${RFValue(72)}px;
  height: ${RFValue(72)}px;
  position: absolute;
  left: ${RFValue(80)}px;
  top: ${RFValue(28)}px;
`;
export const BackgroundImg = styled.ImageBackground`
  width: ${RFValue(75)}px;
  height: ${RFValue(75)}px;
  position: absolute;
  left: ${RFValue(80)}px;
  top: 40px;
  opacity: 0.4;
`;
