import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Modal } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useTheme } from 'styled-components/native';
import { getUntakedItems } from '../../../integrations/Item';
import { ItemProps, ModalItemProps } from '../../../types/item';
import Header from '../../components/Header';
import Item from '../../components/Item';
import ModalAddItem from '../../components/ModalAddItem';
import ModalItem from '../../components/ModalItem';

import * as S from './styles';

const NewList = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [unpayedItems, setUnpayedItems] = useState<ItemProps[]>([]);
  const bottomSheetRef = useRef<Modalize>(null);
  const [itemDetails, setItemDetails] = useState<ModalItemProps>();
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

  const handleSetItemDetails = (props: ModalItemProps) => {
    setItemDetails(props);
    bottomSheetRef.current?.open();
  };

  const handleChangeActiveFilter = (filterName: string) => {
    setActiveFilter(filterName);
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

      <S.ItemsContainer>
        {unpayedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            note={item.note}
            quantity={item.quantity}
            onPress={() => {
              handleSetItemDetails(item);
            }}
          />
        ))}
      </S.ItemsContainer>

      <Modal
        transparent
        visible={modalOpen}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <ModalAddItem handleCloseModal={handleCloseModal} />
      </Modal>
      <Modalize ref={bottomSheetRef} adjustToContentHeight>
        <ModalItem
          name={itemDetails?.name || ''}
          note={itemDetails?.note || ''}
          price={itemDetails?.price}
          quantity={itemDetails?.quantity}
        />
      </Modalize>
    </S.Container>
  );
};

export default NewList;
