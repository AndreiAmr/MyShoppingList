import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { createNewItem } from '../../../integrations/Item';
import { ItemProps } from '../../../types/item';
import Button from '../../components/Button';
import Header from '../../components/Header';
import constants from '../../routes/constants';
import * as S from './styles';

const AddItem = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const [name, setName] = useState<string>('');
  const [priorityLevel, setPriorityLevel] = useState<number>();
  const [price, setPrice] = useState<number>(0);
  const [itemColor, setItemColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [submitButtonDisabled, setSubmitButtonDisabled] =
    useState<boolean>(true);

  const handleChangeName = (itemName: string) => {
    setName(itemName);
  };

  const handleChangePriorityLevel = (level: number) => {
    setPriorityLevel(level);
  };

  const handleChangePrice = (itemPrice: number) => {
    setPrice(itemPrice);
  };

  const changeItemColor = (color: string) => {
    setItemColor(color);
  };

  const handleChangeSubmitButtonDisabled = useCallback(
    (isDisabled: boolean) => {
      setSubmitButtonDisabled(isDisabled);
    },
    [],
  );

  const handleEmptyForm = () => {
    setName('');
    setItemColor('');
    setPrice(0);
    setPriorityLevel(undefined);
    setQuantity(0);
  };

  const handleSubmitButton = () => {
    createNewItem({
      name,
      itemColor,
      price,
      priorityLevel,
      quantity,
      createdAt: new Date().toISOString(),
    } as ItemProps);
    navigation.navigate(constants.itemsList);
    handleEmptyForm();
  };

  useEffect(() => {
    const isNameValid = name !== '';
    const isPriorityLevel = priorityLevel !== undefined;
    const isQuantity = quantity !== undefined;
    const isItemColorValid = itemColor !== '';

    if (isNameValid && isPriorityLevel && isItemColorValid && isQuantity) {
      handleChangeSubmitButtonDisabled(false);
    } else {
      handleChangeSubmitButtonDisabled(true);
    }
  }, [
    name,
    priorityLevel,
    itemColor,
    quantity,
    handleChangeSubmitButtonDisabled,
  ]);

  return (
    <S.Container>
      <Header title="Novo item" goBackLabel="voltar" />
      <S.ContentContainer>
        <S.Label>Nome</S.Label>
        <S.NameInput
          placeholder="Ex: Pacote de macarrão"
          value={name}
          onChangeText={handleChangeName}
        />

        <S.Label>Nivel de prioridade</S.Label>
        <S.PriorityLevelContainer>
          <S.PriorityButton
            active={priorityLevel === undefined || priorityLevel === 1}
            onPress={() => handleChangePriorityLevel(1)}
          >
            <S.PriotyText>1</S.PriotyText>
          </S.PriorityButton>
          <S.PriorityButton
            active={priorityLevel === undefined || priorityLevel === 2}
            onPress={() => handleChangePriorityLevel(2)}
          >
            <S.PriotyText>2</S.PriotyText>
          </S.PriorityButton>
          <S.PriorityButton
            active={priorityLevel === undefined || priorityLevel === 3}
            onPress={() => handleChangePriorityLevel(3)}
          >
            <S.PriotyText>3</S.PriotyText>
          </S.PriorityButton>
          <S.PriorityButton
            active={priorityLevel === undefined || priorityLevel === 4}
            onPress={() => handleChangePriorityLevel(4)}
          >
            <S.PriotyText>4</S.PriotyText>
          </S.PriorityButton>
          <S.PriorityButton
            active={priorityLevel === undefined || priorityLevel === 5}
            onPress={() => handleChangePriorityLevel(5)}
          >
            <S.PriotyText>5</S.PriotyText>
          </S.PriorityButton>
        </S.PriorityLevelContainer>
        <S.Label>Preço</S.Label>
        <S.PriceTextInput
          placeholder="R$0,00"
          prefix="R$ "
          value={price}
          onChangeValue={text => handleChangePrice(Number(text))}
        />

        <S.Label>Quantidade</S.Label>
        <S.QuantityInput
          keyboardType="numeric"
          placeholder="Ex: 4"
          onChangeText={value => setQuantity(Number(value))}
          value={String(quantity)}
        />
        <S.Label>Cor do item</S.Label>
        <S.ItemColorContainer>
          <S.ItemColor
            active={itemColor === '' || itemColor === theme.color.purple_light}
            color="purple"
            onPress={() => changeItemColor(theme.color.purple_light)}
          />
          <S.ItemColor
            active={itemColor === '' || itemColor === theme.color.blue}
            color="blue"
            onPress={() => changeItemColor(theme.color.blue)}
          />
          <S.ItemColor
            active={itemColor === '' || itemColor === theme.color.green}
            color="green"
            onPress={() => changeItemColor(theme.color.green)}
          />
          <S.ItemColor
            active={itemColor === '' || itemColor === theme.color.yellow}
            color="yellow"
            onPress={() => changeItemColor(theme.color.yellow)}
          />
          <S.ItemColor
            active={itemColor === '' || itemColor === theme.color.orange}
            color="orange"
            onPress={() => changeItemColor(theme.color.orange)}
          />
        </S.ItemColorContainer>

        <Button
          color="blue"
          label="Salvar"
          onPress={handleSubmitButton}
          disabled={submitButtonDisabled}
        />
      </S.ContentContainer>
    </S.Container>
  );
};

export default AddItem;
