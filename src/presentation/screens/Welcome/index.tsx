import React from 'react';
import { Alert, StatusBar } from 'react-native';
import * as S from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Welcome = () => {
  const handleSigninGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      Alert.alert('logado com google');
    } catch (err) {
      console.log(err);
    }
  };

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

      <S.Button
        testID="google-button-test-id"
        bottomLeft
        onPress={handleSigninGoogle}
      >
        <S.ButtonText>Entrar com Google</S.ButtonText>
      </S.Button>
      <S.Button testID="about-button-test-id" topLeft>
        <S.ButtonText>Sobre o app</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default Welcome;
