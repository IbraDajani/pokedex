import styled from 'styled-components/native';
import Icon from '~/components/Icon';
import Text from '~/components/Text';
import {StyleProps} from './types';

export const ButtonContainer = styled.TouchableOpacity<Props>`
  min-width: 51%;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  background-color: ${({isSelected}) => (isSelected ? 'black' : 'transparent')};
  padding: 8px;
  padding-left: 15px;
  border-radius: 16px;
`;
export const RouteName = styled(Text).attrs({
  isBold: true,
})<StyleProps>`
  color: ${({isSelected}) => (isSelected ? 'white' : 'black')};
`;
export const ButtonIcon = styled(Icon).attrs(({isSelected}: StyleProps) => {
  if (isSelected) {
    return {activeColor: 'white'};
  } else {
    return {activeColor: 'black'};
  }
})<StyleProps>``;
