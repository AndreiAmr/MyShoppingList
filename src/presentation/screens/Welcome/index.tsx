import React from 'react';
import { StatusBar } from 'react-native';
import * as S from './styles';

const Welcome = () => {
  return (
    <S.Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <S.Image />
      <S.AppName testID="app-name-test-id">My Shopping List</S.AppName>
      <S.Description testID="app-description-test-id">
        Sua lista de compras inteligente!
      </S.Description>

      <S.Button testID="google-button-test-id" bottomLeft>
        <S.ButtonText>Entrar com Google</S.ButtonText>
      </S.Button>
      <S.Button testID="about-button-test-id" topLeft>
        <S.ButtonText>Sobre o app</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default Welcome;
