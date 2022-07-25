import React from 'react';
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface Props {
  name?: string;
  src?: string;
  bgColor?: string;
  bgColors?: string[];
  textColor?: string;
  size?: number;
  imageStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
  component?: React.ReactNode;
}
