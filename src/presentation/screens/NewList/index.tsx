import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useTheme } from 'styled-components/native';
import { Modal, StatusBar } from 'react-native';
import {
  getUntakedItems,
  handleDeleteItem,
  handleTakeItem,
} from '../../../integrations/Item';
import { ItemModalPriceProps, ItemProps } from '../../../types/item';
import Header from '../../components/Header';
import Item from '../../components/Item';
import * as S from './styles';

import ModalPrice from '../../components/ModalPrice';

const NewList = () => {
  const theme = useTheme();
  const [unpayedItems, setUnpayedItems] = useState<ItemProps[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>();
  const [modalPriceInfos, setModalPriceInfos] = useState<ItemModalPriceProps>();
  const [modalPriceVisible, setModalPriceVisible] = useState<boolean>(false);

  const scrollRef = useRef(null);

  const handleChangeUnpayedItems = (data: ItemProps[]) => {
    setUnpayedItems(data);
  };

  const handleOpenModalPrice = (props: ItemModalPriceProps) => {
    setModalPriceVisible(true);
    setModalPriceInfos(props);
  };
  const handleCloseModalPrice = useCallback(() => {
    setModalPriceVisible(false);
    setModalPriceInfos(undefined);
  }, []);

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
          simultaneousHandlers={scrollRef}
          handleOpenModalPrice={handleOpenModalPrice}
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
      <StatusBar backgroundColor={theme.color.background} />
      <Header goBackLabel="voltar" title="Nova Lista" />
      <S.SearchContainer>
        <S.SearchInput
          placeholder="Pesquisar por nome"
          placeholderTextColor={theme.color.purple_light}
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

      {unpayedItems.length === 0 ? (
        <S.NoItems>
          Adicione itens à sua lista de compras para ve-los aqui!
        </S.NoItems>
      ) : (
        <S.ItemsContainer ref={scrollRef}>{renderItems()}</S.ItemsContainer>
      )}
      <Modal visible={modalPriceVisible} animationType="fade" transparent>
        <StatusBar backgroundColor={`${theme.color.purple_light}70`} />
        {modalPriceInfos && modalPriceInfos.id && (
          <ModalPrice
            handleCloseModalPrice={handleCloseModalPrice}
            id={modalPriceInfos.id}
          />
        )}
      </Modal>
    </S.Container>
  );
};

export default NewList;
