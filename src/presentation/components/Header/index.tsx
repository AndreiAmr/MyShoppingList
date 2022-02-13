import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

interface HeaderProps {
  goBackLabel: string;
  title: string;
}

const Header = ({ goBackLabel, title }: HeaderProps) => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.GoBackButton>
        <FontAwesomeIcon icon={faChevronLeft} color={theme.color.text_header} />
        <S.GoBackLabel testID="go-back-button-test-id">
          {goBackLabel}
        </S.GoBackLabel>
      </S.GoBackButton>

      <S.Title testID="title-test-id">{title}</S.Title>
    </S.Container>
  );
};

export default Header;
