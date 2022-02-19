import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import Header from '../../components/Header';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { getUserName } from '../../../integrations/User/user';
import constants from '../../routes/constants';
import ScreenTitle from '../../components/ScreenTitle';
import { heightPercentageToDP } from 'react-native-responsive-screen';

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
      <ScreenTitle normal="Olá," highlighted={name ? `${name}!` : ''} />
      <S.WishTodayText>O que deseja hoje ?</S.WishTodayText>

      <S.OptionButton onPress={navigateToNewList}>
        <FontAwesomeIcon
          icon={faPlus}
          color={theme.color.primary}
          size={heightPercentageToDP(4)}
        />
        <S.OptionText>Nova lista</S.OptionText>
      </S.OptionButton>
    </S.Container>
  );
};

export default Home;
