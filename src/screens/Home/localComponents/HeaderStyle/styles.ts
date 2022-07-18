import {Image} from 'react-native';
import styled from 'styled-components/native';
import RowBetween from '~/components/RowBetween';
import Text from '../../../../components/Text';

export const Container = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  flex-direction: row;
`;
export const RowBetweenHome = styled(RowBetween).attrs({})`
  padding-top: 55px;
  padding-left: 10px;
  padding-right: 15px;
`;
