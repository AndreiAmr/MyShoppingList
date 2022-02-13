import React from 'react';
import { StatusBar } from 'react-native';
import * as S from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import constants from '../../routes/constants';
import { useTheme } from 'styled-components/native';

const Welcome = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const handleSigninGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate(constants.home);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container>
      <StatusBar
        translucent
        backgroundColor={theme.color.background}
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
