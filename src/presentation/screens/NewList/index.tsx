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
import ScreenTitle from '../../components/ScreenTitle';
import * as S from './styles';

const NewList = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [unpayedItems, setUnpayedItems] = useState<ItemProps[]>([]);
  const bottomSheetRef = useRef<Modalize>(null);
  const [itemDetails, setItemDetails] = useState<ModalItemProps>();

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

  const handleSetItemDetails = (props: ModalItemProps) => {
    setItemDetails(props);
    bottomSheetRef.current?.open();
  };

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
