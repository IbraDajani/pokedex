import {ButtonContainer, ButtonIcon, RouteName} from './styles';
import React from 'react';
import Separator from '~/components/Separator';
import {Props} from './types';
import {useNavigation, useRoute} from '@react-navigation/native';

const RouteNavigationButton = ({
  routeName,
  icon,
  setCurrentTab,
  currentTab,
  children,
  ...rest
}: Props) => {
  const {goBack} = useNavigation();
  const {name} = useRoute();
  return (
    <ButtonContainer
      onPress={() => {
        setCurrentTab(routeName);
        goBack();
      }}
      isSelected={routeName === name}
      {...rest}>
      <ButtonIcon isSelected={routeName === name} icon={icon} />
      <Separator width={10} />
      <RouteName isSelected={routeName === name}>{routeName}</RouteName>
      {children}
    </ButtonContainer>
  );
};

export default RouteNavigationButton;
