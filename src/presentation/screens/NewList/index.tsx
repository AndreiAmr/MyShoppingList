import React, { useCallback, useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { useTheme } from 'styled-components/native';
import { getUntakedItems } from '../../../integrations/Item';
import { ItemProps } from '../../../types/item';
import Header from '../../components/Header';
import Item from '../../components/Item';
import ModalAddItem from '../../components/ModalAddItem';
import ScreenTitle from '../../components/ScreenTitle';
import * as S from './styles';

const NewList = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [unpayedItems, setUnpayedItems] = useState<ItemProps[]>([]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChangeUnpayedItems = (data: ItemProps[]) => {
    setUnpayedItems(data);
  };

  const getItems = useCallback(() => {
    getUntakedItems({
      callback: handleChangeUnpayedItems,
    });
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <S.Container>
      <Header goBackLabel="voltar" title="Nova Lista" />
      <S.TitleContainer>
        <ScreenTitle normal="Adicionar item," highlighted="Ver Lista" />
        <S.SearchAndAddContainer>
          <S.SearchInput
            placeholderTextColor={theme.color.primary}
            placeholder="Pesquise aqui"
          />
          <S.AddItemButton onPress={handleOpenModal}>
            <S.AddItemButtonText>add. item </S.AddItemButtonText>
          </S.AddItemButton>
        </S.SearchAndAddContainer>
      </S.TitleContainer>
      <S.ItemsTitle>Itens na lista</S.ItemsTitle>
      {unpayedItems.map(item => (
        <Item name={item.name} note={item.note} quantity={item.quantity} />
      ))}

      <Modal
        transparent
        visible={modalOpen}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <ModalAddItem handleCloseModal={handleCloseModal} />
      </Modal>
    </S.Container>
  );
};

export default NewList;
