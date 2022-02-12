import React from 'react';
import * as S from './styles';

const Welcome = () => {
  return (
    <S.Container>
      <S.AppName testID="app-name-test-id">My Shopping List</S.AppName>
      <S.Description testID="app-description-test-id">
        Sua lista de compras inteligente!
      </S.Description>

      <S.GoogleButton testID="google-button-test-id" />
    </S.Container>
  );
};

export default Welcome;
