import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import * as S from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import constants from '../../routes/constants';
import { useTheme } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import keys from '../../storage/keys';
import { RFValue } from 'react-native-responsive-fontsize';

const Welcome = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSigninGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const {
        user: { uid },
      } = await auth().signInWithCredential(googleCredential);
      await AsyncStorage.setItem(keys.userId, uid);
      navigation.navigate(constants.home);
    } catch (err) {
      return err;
    }
  };

  const getUserTokenOnStorage = useCallback(async () => {
    try {
      setLoading(true);

      const userID = await AsyncStorage.getItem(keys.userId);
      if (userID !== null) {
        navigation.navigate(constants.home);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  }, [navigation]);

  useEffect(() => {
    getUserTokenOnStorage();
  }, [getUserTokenOnStorage]);

  return (
    <S.Container>
      <StatusBar
        translucent
        backgroundColor={theme.color.light}
        barStyle={'dark-content'}
      />
      <S.Image />
      <S.AppName testID="app-name-test-id">My Shopping List</S.AppName>
      <S.Description testID="app-description-test-id">
        Sua lista de compras inteligente!
      </S.Description>

      {loading ? (
        <ActivityIndicator color={theme.color.primary} size={RFValue(40)} />
      ) : (
        <>
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
        </>
      )}
    </S.Container>
  );
};

export default Welcome;
