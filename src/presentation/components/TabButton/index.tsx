import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { TabBarButtonProps } from '../../../types/tabBar';

import * as S from './styles';
import { useTheme } from 'styled-components/native';

const TabButton = ({ size, focused, icon }: TabBarButtonProps) => {
  const theme = useTheme();

  return (
    <S.Container focused={focused}>
      <FontAwesomeIcon icon={icon} color={theme.color.light} size={size} />
    </S.Container>
  );
};

export default TabButton;
