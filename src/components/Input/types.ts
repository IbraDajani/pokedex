import {TextInputProps} from 'react-native';
import {NameIconTypes} from '~/constants/icons';

export type IconPosition = 'left' | 'right';

export interface InputProps extends TextInputProps {
  color?: string;
  iconColor?: string;
  icon?: NameIconTypes;
  iconPosition?: IconPosition;
  label?: string;
  error?: string;
}

/**
 * StyleProps
 */

export interface BorderProps {
  readonly color: string;
  readonly borderColor: string;
}

/**
 * RefProps
 */

export interface InputValueRef {
  value: string;
  focus: () => void;
  blur: () => void;
  setValue: (value: string) => void;
}
