import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {NameIconTypes} from '~/constants/icons';

type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children?: string | React.ReactNode;
  color?: string;
  mode?: Mode;
  loading?: boolean;
  icon?: NameIconTypes;
  paddingHorizontal?: number;
  paddingVectical?: number;
  shadow?: boolean;
}

/**
 * Styles
 */

export interface ContainerProps {
  readonly color: string;
  readonly borderColor: string;
  readonly mode: Mode;
  readonly paddingHorizontal?: number;
  readonly paddingVectical?: number;
  size?: number;
  shadow?: boolean;
}

export interface TitleProps {
  readonly color: string;
}
