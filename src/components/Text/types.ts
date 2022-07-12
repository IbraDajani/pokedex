import React from 'react';
import {TextProps} from 'react-native';

export interface Props extends TextProps {
  children?: string | React.ReactNode;
  size?: number;
  color?: string;
  isBold?: boolean;
}
