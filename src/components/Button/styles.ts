import styled, {css} from 'styled-components/native';

import {ContainerProps, TitleProps} from './types';

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 12px 0 12px 0;

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

export const Loading = styled.ActivityIndicator`
  margin-left: 10px;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;

  left: 20px;
`;
