import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'styled-components/native';
import { getUserName } from '../../../integrations/User/user';
import Header from '../../components/Header';
import ScreenTitle from '../../components/ScreenTitle';
import constants from '../../routes/constants';
import * as S from './styles';

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [name, setName] = useState<string>();

  const getName = useCallback(async () => {
    const userName = getUserName();
    setName(userName);
  }, []);

  const navigateToNewList = () => {
    navigation.navigate(constants.newlist);
  };

  useEffect(() => {
    getName();
  }, [getName]);

  return (
    <S.Container>
      <Header goBackLabel="sair" title="Home" />
      <S.GreetingsContainer>
        <ScreenTitle normal="Olá," highlighted={name ? `${name}!` : ''} />
      </S.GreetingsContainer>
      <S.WishTodayText>O que deseja hoje ?</S.WishTodayText>

      <S.OptionButton onPress={navigateToNewList}>
        <FontAwesomeIcon
          icon={faPlus}
          color={theme.color.button}
          size={heightPercentageToDP(4)}
        />
        <S.OptionText>Nova lista</S.OptionText>
      </S.OptionButton>
    </S.Container>
  );
};

export default Home;
