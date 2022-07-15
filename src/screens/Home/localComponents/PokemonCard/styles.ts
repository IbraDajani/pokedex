import styled from 'styled-components/native';
import Text from '../../../../components/Text';
import {ColorProps} from './types';

export const Container = styled.TouchableOpacity<ColorProps>`
  width: 180px;
  height: 120px;
  border-radius: 24px;
  padding-top: 10px;
  padding-left: 10px;
  margin-right: ${({isLeft}) => (isLeft ? 10 : 0)}px;
  background-color: ${({backgroundColor}) => backgroundColor || 'transparent'};
  position: relative;
  overflow: hidden;
`;

export const TextName = styled(Text).attrs({
  size: 18,
  color: 'white',
})``;

export const TextType = styled(Text).attrs({
  size: 12,
  color: 'white',
})`
  background-color: #ffffff50;
  min-width: 60px;
  max-width: 70px;
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
  width: 130px;
  height: 120px;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 75px;
  top: 25px;
  opacity: 0.6;
`;

// // justify-content: center;
// // align-items: center;
// // width: 60px;
// // height: 20px;
// // background-color: cyan;
