import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {NameIconTypes} from '~/constants/icons';

export type RouteName = 'Home' | 'Favorites' | 'Dark Mode';

export interface Props extends TouchableOpacityProps {
  routeName: RouteName;
  icon: NameIconTypes;
  currentTab: RouteName;
  children?: React.ReactNode;
  setCurrentTab: React.Dispatch<React.SetStateAction<RouteName>>;
}

/**
 * StyleProps
 */

export interface StyleProps {
  isSelected: boolean;
}
