import styled from 'styled-components/native';
import {Image} from 'react-native';
import Text from '~/components/Text';
import {View} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: gray;
  padding: 10px;
`;
export const TextName = styled(Text).attrs({
  size: 30,
  color: 'white',
})`
  width: 160px;
  padding-left: 20px;
  position: absolute;
  top: 140px;
`;
export const FlatListContainer = styled.View`
  margin-top: 130px;
`;

export const BackgroundImg = styled(Image).attrs({
  resizeMode: 'contain',
})`
  width: 450px;
  height: 450px;
  position: absolute;
  left: 140px;
  bottom: 550px;
  opacity: 0.4;
  tint-color: white;
`;
