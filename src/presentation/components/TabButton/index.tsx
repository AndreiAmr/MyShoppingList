import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { TabBarButtonProps } from '../../../types/tabBar';

import * as S from './styles';
import { useTheme } from 'styled-components/native';

const TabButton = ({ size, label, focused, icon }: TabBarButtonProps) => {
  const theme = useTheme();

  return (
    <S.Container focused={focused}>
      <FontAwesomeIcon
        icon={icon}
        color={focused ? theme.color.light : theme.color.button_secondary}
        size={size}
      />
      {!focused && <S.Label>{label}</S.Label>}
    </S.Container>
  );
};

export default TabButton;
