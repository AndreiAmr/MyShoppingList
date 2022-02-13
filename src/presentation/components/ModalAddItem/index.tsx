import React from 'react';

import * as S from './styles';

interface ModalAddItemProps {
  handleCloseModal: () => void;
  handleSubmit: () => void;
}

const ModalAddItem = ({ handleCloseModal }: ModalAddItemProps) => {
  return (
    <S.ModalContent activeOpacity={1} onPress={handleCloseModal}>
      <S.NewItemContainer activeOpacity={1}>
        <S.ModalTitle>Adicionar item</S.ModalTitle>
        <S.InputContainer>
          <S.InputLabel>Nome</S.InputLabel>
          <S.Input placeholder="Digite aqui" />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Observações</S.InputLabel>
          <S.Input placeholder="Digite aqui" />
        </S.InputContainer>

        <S.PriceAndQuantityContainer>
          <S.PriceContainer>
            <S.PriceTitle>Preço</S.PriceTitle>
            <S.PriceInput placeholder="R$" />
          </S.PriceContainer>
          <S.PriceContainer>
            <S.PriceTitle>Quantidade </S.PriceTitle>
            <S.PriceInput placeholder="X" />
          </S.PriceContainer>
        </S.PriceAndQuantityContainer>
        <S.SubmitButton>
          <S.SubmitText>Adicionar</S.SubmitText>
        </S.SubmitButton>
      </S.NewItemContainer>
    </S.ModalContent>
  );
};

export default ModalAddItem;
