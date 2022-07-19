import styled from 'styled-components/native';
import Text from '~/components/Text';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  padding: 0 ${RFValue(10)}px;
`;
export const HeaderTitle = styled(Text).attrs({
  size: RFValue(25),
  isBold: true,
})`
  padding-left: ${RFValue(10)}px;
`;

export const FlatListContainer = styled.View`
  align-items: center;
  padding-bottom: ${RFValue(160)}px;
`;

export const BackgroundImage = styled.Image`
  width: ${RFValue(300)}px;
  height: ${RFValue(300)}px;
  left: ${RFValue(165)}px;
  top: ${RFValue(-90)}px;
  position: absolute;
  opacity: 0.4;
`;
