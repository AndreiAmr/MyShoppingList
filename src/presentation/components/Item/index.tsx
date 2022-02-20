import React from 'react';
import { ItemComponentProps } from '../../../types/item';
import * as S from './styles';

const Item = ({ name, quantity }: ItemComponentProps) => {
  return (
    <S.Container>
      <S.NameContaiener>
        <S.Name>{name}</S.Name>
        <S.Note>Clique para ver detalhes</S.Note>
      </S.NameContaiener>
      <S.QuantityContainer>
        <S.Quantity>
          {quantity}
          <S.Quantity small>x</S.Quantity>
        </S.Quantity>
      </S.QuantityContainer>
    </S.Container>
  );
};

export default Item;
