import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faNoteSticky,
  faDollar,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { ModalItemProps } from '../../../types/item';
import * as S from './styles';
import { widthPercentageToDP } from 'react-native-responsive-screen';

interface RowProps {
  icon: IconProp;
  value: string;
  rowKey: string;
}

const Row = ({ icon, value, rowKey }: RowProps) => {
  const theme = useTheme();

  return (
    <S.Row>
      <S.RowText keyText>
        <FontAwesomeIcon
          icon={icon}
          color={theme.color.button_secondary}
          size={widthPercentageToDP(5)}
        />{' '}
        {rowKey}: <S.RowText>{value}</S.RowText>
      </S.RowText>
    </S.Row>
  );
};

const ModalItem = ({ name, note, price, quantity }: ModalItemProps) => {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <Row icon={faNoteSticky} value={note} rowKey="Observação" />
      <Row
        icon={faDollar}
        value={price ? String(price) : 'Não indicado'}
        rowKey="Preço"
      />
      <Row
        icon={faCartShopping}
        value={quantity ? String(quantity) : 'Não indicado'}
        rowKey="Quantidade"
      />

      <S.ButtonsContainer>
        <S.Button deleteButton>
          <S.ButtonText deleteButton>Deletar</S.ButtonText>
        </S.Button>
        <S.Button>
          <S.ButtonText>Pegar</S.ButtonText>
        </S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default ModalItem;
