import styled from 'styled-components/native';
import Text from '~/components/Text';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  padding: 0 10px;
`;
export const HeaderTitle = styled(Text).attrs({
  size: RFValue(25),
  isBold: true,
})`
  margin: 0 6px;
`;

export const FlatListContainer = styled.View`
  align-items: center;
  padding-bottom: 200px;
`;

export const BackgroundImage = styled.Image`
  width: 300px;
  height: 300px;
  left: 220px;
  top: -80px;
  position: absolute;
  opacity: 0.4;
`;
