import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import Separator from '../Separator';

import {
  Container,
  IconContainer,
  Label,
  Border,
  Error,
  InputInternal,
} from './styles';
import {InputProps, InputValueRef} from './types';

const Input: React.ForwardRefRenderFunction<InputValueRef, InputProps> = (
  {
    color = '#6B7785',
    secureTextEntry,
    icon,
    iconColor,
    iconPosition = 'right',
    label,
    error,
    onChangeText,
    ...rest
  },
  ref,
) => {
  /**
   * States
   */

  const [text, setText] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  /**
   * Refs
   */

  const internalRef = useRef<any>();

  /**
   * ImperativeHandles
   */

  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus?.(),
      blur: () => internalRef.current?.blur?.(),
      setValue: (value: string) => setText(value),
    }),
    [text],
  );

  /**
   * Memos
   */

  const selectedColorForActiveColorIcon = useMemo(() => {
    if (error) {
      return '#D93936';
    }
    if (iconColor) {
      return iconColor;
    }
    return color;
  }, [color, error, iconColor]);

  /**
   * Callbacks
   */

  const renderIcon = useCallback(() => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity
          onPress={() => setPasswordVisible(oldState => !oldState)}>
          <IconContainer iconPosition={iconPosition}>
            <Icon
              activeColor={selectedColorForActiveColorIcon}
              icon={!passwordVisible ? 'openedEye' : 'closedEye'}
            />
          </IconContainer>
        </TouchableOpacity>
      );
    }
    if (icon) {
      return (
        <IconContainer iconPosition={iconPosition}>
          <Icon icon={icon} activeColor={selectedColorForActiveColorIcon} />
        </IconContainer>
      );
    }
    return null;
  }, [
    passwordVisible,
    secureTextEntry,
    selectedColorForActiveColorIcon,
    iconPosition,
    icon,
  ]);

  return (
    <Container>
      {!!label && (
        <Label color="#41474D" size={14}>
          {label}
        </Label>
      )}
      <Separator height={10} />
      <Border color="transparent" borderColor={error ? '#D93936' : color}>
        {iconPosition === 'left' && renderIcon()}
        <InputInternal
          ref={internalRef}
          value={text}
          onChangeText={value => {
            setText(value);
            onChangeText?.(value);
          }}
          secureTextEntry={secureTextEntry && !passwordVisible}
          {...rest}
        />
        {iconPosition === 'right' && renderIcon()}
      </Border>
      {!!error && (
        <Error testID="error-input" color="#D93936" size={18}>
          {error}
        </Error>
      )}
    </Container>
  );
};

export default forwardRef(Input);
