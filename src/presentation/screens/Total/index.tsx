import React, { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { getTakedItems, handleBackItem } from '../../../integrations/Item';
import { ItemProps } from '../../../types/item';
import Header from '../../components/Header';
import Item from '../../components/Item';

import * as S from './styles';

const AddReceipt = () => {
  const theme = useTheme();
  const [takedItens, setTakedItems] = useState<ItemProps[]>([]);
  const [total, setTotal] = useState<number>(0);
  const scrollRef = useRef(null);

  const handleChangeTakedItems = (data: ItemProps[]) => {
    setTakedItems(data);
  };

  const handleGetTotal = useCallback(() => {
    let totalSum: number = 0;
    takedItens.forEach(item => {
      totalSum += item.price * item.quantity;
    });
    setTotal(totalSum);
  }, [takedItens]);

  const handleGetItems = useCallback(() => {
    getTakedItems({
      callback: handleChangeTakedItems,
    });
  }, []);

  const handleGoBackItem = (id: string) => {
    try {
      handleBackItem(id);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    handleGetItems();
  }, [handleGetItems]);

  useEffect(() => {
    handleGetTotal();
  }, [handleGetTotal]);

  return (
    <S.Container ref={scrollRef}>
      <StatusBar backgroundColor={theme.color.background} />
      <Header goBackLabel="voltar" title="Total e recibo" />
      <S.TotalSumContainer>
        <S.TotalTitle>Total dos itens pegos:</S.TotalTitle>
        <S.TotalSum>R$ {total.toFixed(2)}</S.TotalSum>
      </S.TotalSumContainer>
      <S.AddReceiptContainer>
        <S.AddReceiptText>
          Clique aqui para adicionar seu comprovante de pagamento
        </S.AddReceiptText>
      </S.AddReceiptContainer>

      {takedItens.map(item => (
        <Item
          name={item.name}
          id={item.id || ''}
          itemColor={item.itemColor}
          onDelete={handleBackItem}
          onGoBack={handleGoBackItem}
          price={item.price}
          priorityLevel={item.priorityLevel}
          quantity={item.quantity}
          key={item.id}
          simultaneousHandlers={scrollRef}
        />
      ))}
    </S.Container>
  );
};

export default AddReceipt;
