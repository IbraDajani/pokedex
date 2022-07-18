import styled, {css} from 'styled-components/native';
import {Animated} from 'react-native';
import {ContainerProps, TitleProps} from './types';

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  padding: 12px 0 12px 0;
  ${({shadow}) => shadow && 'elevation:3'}

  ${({paddingHorizontal}) => {
    if (paddingHorizontal) {
      return css`
        padding-left: ${paddingHorizontal}px;
        padding-right: ${paddingHorizontal}px;
      `;
    }
  }}
  ${({paddingVectical}) => {
    if (paddingVectical) {
      return css`
        padding-top: ${paddingVectical}px;
        padding-bottom: ${paddingVectical}px;
      `;
    }
  }}
    background-color: ${({color, mode}) => {
    if (mode === 'outlined') {
      return 'transparent';
    }
    return color;
  }};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  border-color: ${({borderColor}) => borderColor || 'transparent'};
  border-width: 1px;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({color}) => color};
  font-size: 18px;
  align-self: center;
`;

export const Loading = styled(Animated.Image)`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 20px;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
  left: 20px;
`;
