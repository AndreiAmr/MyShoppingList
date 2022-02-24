import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { getUserName } from '../../../integrations/User/user';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ScreenTitle from '../../components/ScreenTitle';
import constants from '../../routes/constants';
import * as S from './styles';

const Home = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>();

  const getName = useCallback(async () => {
    const userName = getUserName();
    setName(userName);
  }, []);

  const handleNavigateToItemsList = () => {
    navigation.navigate(constants.Items);
  };

  useEffect(() => {
    getName();
  }, [getName]);

  return (
    <S.Container>
      <Header goBackLabel="sair" title="Home" />

      <ScreenTitle normal="Olá," highlighted={name ? `${name}!` : ''} />

      <S.WishTodayText>O que deseja hoje ?</S.WishTodayText>

      <Button
        label="Lista de itens"
        onPress={handleNavigateToItemsList}
        color="purple"
      />
      <Button
        label="Historico de compras"
        onPress={handleNavigateToItemsList}
        color="green"
      />
      <Button
        label="Configurações de perfil"
        onPress={handleNavigateToItemsList}
        color="blue"
      />
    </S.Container>
  );
};

export default Home;
