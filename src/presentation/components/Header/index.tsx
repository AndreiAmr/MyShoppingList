import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';

import * as S from './styles';

interface HeaderProps {
  goBackLabel: string;
  title: string;
}

const Header = ({ goBackLabel, title }: HeaderProps) => {
  return (
    <S.Container>
      <S.GoBackButton>
        <FontAwesomeIcon icon={faChevronLeft} />
        <S.GoBackLabel testID="go-back-button-test-id">
          {goBackLabel}
        </S.GoBackLabel>
      </S.GoBackButton>

      <S.Title testID="title-test-id">{title}</S.Title>
    </S.Container>
  );
};

export default Header;
