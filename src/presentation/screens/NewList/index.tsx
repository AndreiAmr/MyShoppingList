import React, { useCallback, useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  getUntakedItems,
  handleDeleteItem,
  handleTakeItem,
} from '../../../integrations/Item';
import { ItemProps } from '../../../types/item';
import Header from '../../components/Header';
import Item from '../../components/Item';
import ModalAddItem from '../../components/ModalAddItem';

import * as S from './styles';

const NewList = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [unpayedItems, setUnpayedItems] = useState<ItemProps[]>([]);

  const [activeFilter, setActiveFilter] = useState<string>();

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

  const handleChangeActiveFilter = (filterName: string) => {
    setActiveFilter(filterName);
  };

  const renderItems = () => {
    const items: JSX.Element[] = [];
    unpayedItems.forEach(item => {
      items.push(
        <Item
          key={item.id}
          id={item.id as string}
          onDelete={handleDeleteItem}
          name={item.name}
          itemColor={item.itemColor}
          price={item.price}
          priorityLevel={item.priorityLevel}
          quantity={item.quantity}
          onTake={handleTakeItem}
        />,
      );
    });

    return items;
  };

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <S.Container>
      <Header goBackLabel="voltar" title="Nova Lista" />
      <S.SearchContainer>
        <S.SearchInput
          placeholder="Pesquisar por nome"
          placeholderTextColor={theme.color.purple_dark}
        />
      </S.SearchContainer>

      <S.FiltersContainer>
        <S.FilterButton
          onPress={() => handleChangeActiveFilter('purple')}
          active={activeFilter === 'purple'}
          color="purple"
        >
          <S.FilterText>Prioridade</S.FilterText>
        </S.FilterButton>
        <S.FilterButton
          onPress={() => handleChangeActiveFilter('green')}
          active={activeFilter === 'green'}
          color="green"
        >
          <S.FilterText>Preço</S.FilterText>
        </S.FilterButton>
        <S.FilterButton
          onPress={() => handleChangeActiveFilter('orange')}
          active={activeFilter === 'orange'}
          color="orange"
        >
          <S.FilterText>Data de criação</S.FilterText>
        </S.FilterButton>
      </S.FiltersContainer>

      <S.ItemsContainer>{renderItems()}</S.ItemsContainer>

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
