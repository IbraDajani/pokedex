import React, {useMemo} from 'react';
import {ButtonProps} from './types';

import {AbsoluteIcon, Container, Loading, Title} from './styles';
import Icon from '../Icon';
const Button = ({
  onPress,
  children,
  icon,
  loading,
  mode = 'contained',
  color = 'red',
  ...rest
}: ButtonProps) => {
  const colorByMode = useMemo(() => {
    return mode === 'outlined' ? color : 'white';
  }, [mode, color]);

  return (
    <Container
      borderColor={color}
      mode={mode}
      color={color}
      onPress={onPress}
      disabled={loading}
      {...rest}>
      {!!icon && (
        <AbsoluteIcon>
          <Icon icon={icon} size={20} activeColor="black" />
        </AbsoluteIcon>
      )}
      <Title color={colorByMode}>{children}</Title>
      {loading && <Loading />}
    </Container>
  );
};

export default Button;
