import React, {forwardRef, useCallback} from 'react';
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
import useInputController from './useInputController';

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
  const {
    setPasswordVisible,
    selectedColorForActiveColorIcon,
    passwordVisible,
    internalRef,
    text,
    setText,
  } = useInputController(ref, error, iconColor, color);
  /**
   * Callbacks
   */

  const renderIcon = useCallback(() => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity
          onPress={() => setPasswordVisible((oldState: boolean) => !oldState)}>
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
    secureTextEntry,
    icon,
    iconPosition,
    selectedColorForActiveColorIcon,
    passwordVisible,
    setPasswordVisible,
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
          onChangeText={(value: string) => {
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
