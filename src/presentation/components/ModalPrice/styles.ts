import CurrencyInput from 'react-native-currency-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

interface ModalButtonProps {
  deleteButton?: boolean;
  closeButton?: boolean;
}

export const ModalPriceContainer = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.purple_light}70;
  align-items: center;
  justify-content: center;
`;

export const ModalPriceContent = styled.View`
  width: ${widthPercentageToDP(80)}px;
  height: ${widthPercentageToDP(50)}px;
  background: ${({ theme }) => theme.color.light};
  border-radius: ${widthPercentageToDP(10)}px;
`;

export const ModalPriceDescription = styled.TextInput`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.color.purple_dark};
  text-align: center;
  margin-top: ${RFValue(20)}px;
`;

export const ModalPriceLabel = styled.TextInput`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.color.disabled};
  text-align: left;
  margin-left: ${RFValue(20)}px;
`;

export const ModalPriceInput = styled(CurrencyInput)`
  background: ${({ theme }) => theme.color.light};
  elevation: 6;
  font-size: ${RFValue(16)}px;
  border-radius: ${RFValue(25)}px;
  margin: 0 ${RFValue(20)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.green};
`;

export const ModalButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.TouchableOpacity<ModalButtonProps>`
  min-width: ${widthPercentageToDP(17)}px;
  min-height: ${widthPercentageToDP(17)}px;
  border-radius: ${widthPercentageToDP(8.5)}px;
  background: ${({ theme, deleteButton, closeButton }) =>
    deleteButton
      ? theme.color.orange
      : closeButton
      ? theme.color.disabled
      : theme.color.green};

  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(25)}px;
  elevation: 6;
  margin-left: 10px;
`;
