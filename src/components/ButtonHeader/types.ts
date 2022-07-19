import {TouchableOpacityProps} from 'react-native';
import {NameIconTypes} from '~/constants/icons';

export interface ButtonHeaderProps extends TouchableOpacityProps {
  icon?: NameIconTypes;
  color?: string;
}
