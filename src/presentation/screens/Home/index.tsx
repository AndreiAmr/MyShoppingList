import { faDollar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import Header from '../../components/Header';
import auth from '@react-native-firebase/auth';

import * as S from './styles';

const Home = () => {
  const theme = useTheme();
  const [name, setName] = useState<string>();

  const getUserName = useCallback(async () => {
    const userName: string = auth().currentUser?.displayName as string;

    setName(userName);
  }, []);

  useEffect(() => {
    getUserName();
  }, [getUserName]);

  return (
    <S.Container>
      <Header goBackLabel="sair" title="Home" />
      <S.GreetingsContainer>
        <S.Greeting highlighted={false}>
          Olá, {'\n'}
          <S.Greeting highlighted>{name}!</S.Greeting>
        </S.Greeting>
      </S.GreetingsContainer>
      <S.WishTodayText>O que deseja hoje ?</S.WishTodayText>
      <S.OptionsContainer>
        <S.OptionButton>
          <FontAwesomeIcon icon={faPlus} color={theme.color.primary} />
          <S.OptionText>Nova lista</S.OptionText>
        </S.OptionButton>

        <S.OptionButton>
          <FontAwesomeIcon icon={faDollar} color={theme.color.primary} />
          <S.OptionText>Suas finanças</S.OptionText>
        </S.OptionButton>
      </S.OptionsContainer>
    </S.Container>
  );
};

export default Home;
