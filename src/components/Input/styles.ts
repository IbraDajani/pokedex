import styled from 'styled-components/native';
import Text from '../Text';
import {BorderProps, InputProps} from './types';

export const Container = styled.View``;

export const InputInternal = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: #000;
  min-height: 48px;
`;

export const Border = styled.View<BorderProps>`
  padding: 0 15px;
  background-color: ${({color}) => color};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  border-color: ${({borderColor}) => borderColor};
  border-width: 1px;
`;

export const Error = styled(Text)`
  margin-top: 10px;
`;

export const Label = styled(Text)`
  margin-top: 10px;
`;

export const IconContainer = styled.View<Pick<InputProps, 'iconPosition'>>`
  padding-left: ${({iconPosition}) => {
    return iconPosition === 'right' ? '10' : '0';
  }}px;
  padding-right: ${({iconPosition}) => {
    return iconPosition === 'left' ? '10' : '0';
  }}px;
`;
