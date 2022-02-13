import React, { useState } from 'react';
import Header from '../../components/Header';
import ScreenTitle from '../../components/ScreenTitle';
import { Alert, Modal } from 'react-native';

import * as S from './styles';
import ModalAddItem from '../../components/ModalAddItem';

const NewList = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {};

  return (
    <S.Container>
      <Header goBackLabel="voltar" title="Nova Lista" />
      <ScreenTitle normal="Adicionar item," highlighted="Ver Lista" />
      <S.SearchAndAddContainer>
        <S.SearchContainer placeholder="Pesquise aqui" />
        <S.AddItemButton onPress={handleOpenModal}>
          <S.AddItemButtonText>add. item </S.AddItemButtonText>
        </S.AddItemButton>
      </S.SearchAndAddContainer>
      <Modal
        transparent
        visible={modalOpen}
        animationType="slide"
        onRequestClose={() => Alert.alert("i'm closing")}
      >
        <ModalAddItem
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </S.Container>
  );
};

export default NewList;
