import React, { useState } from 'react';
import * as S from './styles';
import { createNewItem } from '../../../integrations/Item';
import { ItemProps } from '../../../types/item';
import { useTheme } from 'styled-components/native';

interface ModalAddItemProps {
  handleCloseModal: () => void;
}

const ModalAddItem = ({ handleCloseModal }: ModalAddItemProps) => {
  const theme = useTheme();
  const [name, setName] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = async () => {
    try {
      const createdAt: Date | string = new Date().toISOString();
      createNewItem({
        name,
        note,
        price,
        quantity,
        createdAt,
      } as ItemProps);
      handleCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeName = (nameTyped: string) => {
    setName(nameTyped);
  };

  const handleChangeNote = (noteTyped: string) => {
    setNote(noteTyped);
  };

  const handleChangePrice = (priceTyped: number) => {
    setPrice(priceTyped);
  };

  const handleChangeQuantity = (quantityTyped: number) => {
    setQuantity(quantityTyped);
  };

  return (
    <S.ModalContent activeOpacity={1} onPress={handleCloseModal}>
      <S.NewItemContainer activeOpacity={1}>
        <S.ModalTitle>Adicionar item</S.ModalTitle>
        <S.InputContainer>
          <S.InputLabel>Nome</S.InputLabel>
          <S.Input
            placeholderTextColor={theme.color.primary}
            placeholder="Digite aqui"
            onChangeText={handleChangeName}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Observações</S.InputLabel>
          <S.Input
            placeholderTextColor={theme.color.primary}
            placeholder="Digite aqui"
            onChangeText={handleChangeNote}
          />
        </S.InputContainer>

        <S.PriceAndQuantityContainer>
          <S.PriceContainer>
            <S.PriceTitle>Preço</S.PriceTitle>
            <S.PriceInput
              keyboardType="numeric"
              placeholderTextColor={theme.color.primary}
              placeholder="R$"
              onChangeText={value => handleChangePrice(+value)}
            />
          </S.PriceContainer>
          <S.PriceContainer>
            <S.PriceTitle>Quantidade </S.PriceTitle>
            <S.PriceInput
              keyboardType="numeric"
              placeholderTextColor={theme.color.primary}
              placeholder="X"
              onChangeText={value => handleChangeQuantity(+value)}
            />
          </S.PriceContainer>
        </S.PriceAndQuantityContainer>
        <S.SubmitButton onPress={handleSubmit}>
          <S.SubmitText>Adicionar</S.SubmitText>
        </S.SubmitButton>
      </S.NewItemContainer>
    </S.ModalContent>
  );
};

export default ModalAddItem;
