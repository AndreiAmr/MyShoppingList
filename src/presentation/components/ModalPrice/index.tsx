import { faCheck, faClose, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import {
  handleDeleteItem,
  handleSetItemPrice,
} from '../../../integrations/Item';

import * as S from './styles';

interface ModalPriceProps {
  id: string;
  handleCloseModalPrice: () => void;
}

const ModalPrice = ({ id, handleCloseModalPrice }: ModalPriceProps) => {
  const theme = useTheme();
  const [price, setPrice] = useState<number>(0);

  const deleteItem = () => {
    handleDeleteItem(id);
    handleCloseModalPrice();
  };

  const finishPrice = () => {
    handleCloseModalPrice();
    handleSetItemPrice(id, price);
  };

  return (
    <S.ModalPriceContainer>
      <S.ModalPriceContent>
        <S.ModalPriceDescription>
          Informe o preço do produto
        </S.ModalPriceDescription>
        <S.ModalPriceLabel>Preço</S.ModalPriceLabel>
        <S.ModalPriceInput
          prefix="R$ "
          precision={2}
          value={price}
          onChangeValue={tesx => setPrice(Number(tesx))}
          keyboardType="numeric"
          // onChange={props => console.log(props)}
        />
      </S.ModalPriceContent>
      <S.ModalButtonsContainer>
        <S.ModalButton onPress={finishPrice}>
          <FontAwesomeIcon
            icon={faCheck}
            color={theme.color.light}
            size={RFValue(20)}
          />
        </S.ModalButton>
        <S.ModalButton deleteButton onPress={deleteItem}>
          <FontAwesomeIcon
            icon={faTrash}
            color={theme.color.light}
            size={RFValue(20)}
          />
        </S.ModalButton>
        <S.ModalButton closeButton onPress={handleCloseModalPrice}>
          <FontAwesomeIcon
            icon={faClose}
            color={theme.color.light}
            size={RFValue(20)}
          />
        </S.ModalButton>
      </S.ModalButtonsContainer>
    </S.ModalPriceContainer>
  );
};

export default ModalPrice;
