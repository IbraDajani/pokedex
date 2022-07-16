import React from 'react';
import {LoadingProps} from './types';

import {ActivityIndicator} from 'react-native';

const Loading = ({color = 'red', size = 15}: LoadingProps) => {
  return <ActivityIndicator color={color} size={size} />;
};

export default Loading;
