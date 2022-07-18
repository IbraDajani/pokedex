import styled from 'styled-components/native';
import {Props} from './types';

type ContainerProps = Required<Pick<Props, 'color' | 'isBold' | 'size'>>;

export const Container = styled.Text<ContainerProps>`
  color: ${({color}) => color};
  font-size: ${({size}) => size}px;
  ${({isBold}) => isBold && 'font-weight:bolder'}
`;
