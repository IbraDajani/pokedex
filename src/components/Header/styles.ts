import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0 ${RFValue(10)}px;
`;
