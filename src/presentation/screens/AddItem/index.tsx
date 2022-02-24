import React from 'react';
import Header from '../../components/Header';

import * as S from './styles';

const AddItem = () => {
  return (
    <S.Container>
      <Header title="Novo item" goBackLabel="voltar" />
      <S.ContentContainer>
        <S.Label>Nome</S.Label>
        <S.NameInput placeholder="Ex: Pacote de macarrão" />

        <S.Label>Nivel de prioridade</S.Label>
        <S.PriorityLevelContainer>
          <S.PriorityButton>
            <S.PriotyText>1</S.PriotyText>
          </S.PriorityButton>
          <S.PriorityButton>
            <S.PriotyText>2</S.PriotyText>
          </S.PriorityButton>
          <S.PriorityButton>
            <S.PriotyText>3</S.PriotyText>
          </S.PriorityButton>
          <S.PriorityButton>
            <S.PriotyText>4</S.PriotyText>
          </S.PriorityButton>
          <S.PriorityButton>
            <S.PriotyText>5</S.PriotyText>
          </S.PriorityButton>
        </S.PriorityLevelContainer>
        <S.Label>Preço</S.Label>
        <S.PriceTextInput placeholder="R$ 0,00" />

        <S.Label>Cor do item</S.Label>
        <S.ItemColorContainer></S.ItemColorContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default AddItem;
