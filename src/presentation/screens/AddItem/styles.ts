import CurrencyInput from 'react-native-currency-input';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled, { css } from 'styled-components/native';
import { ItemColors } from '../../../types/item';

interface PriorityLevelProps {
  active: boolean;
}

interface ItemColorProps {
  color: ItemColors;
  active: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: ${RFValue(46)}px;
  padding-bottom: ${RFValue(43)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.color.button_secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: ${widthPercentageToDP(7)}px;
`;

export const NameInput = styled.TextInput`
  height: ${heightPercentageToDP(6)}px;
  border-radius: ${heightPercentageToDP(10)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.color.purple_dark};

  margin: ${RFValue(8)}px ${widthPercentageToDP(7)}px
    ${heightPercentageToDP(4)}px;

  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.purple_dark};
  text-align: center;
`;

export const PriorityLevelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(17)}px;
`;

export const PriorityButton = styled.TouchableOpacity<PriorityLevelProps>`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;
  background: ${({ theme }) => theme.color.purple_light}70;
  margin: ${RFValue(14)}px ${RFValue(7)}px;

  align-items: center;
  justify-content: center;

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.color.purple_dark};
    `}
`;

export const PriotyText = styled.Text`
  color: ${({ theme }) => theme.color.light};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const PriceTextInput = styled(CurrencyInput)`
  width: ${widthPercentageToDP(45)}px;
  height: ${heightPercentageToDP(6)}px;
  border-radius: ${heightPercentageToDP(10)}px;
  border: 1px solid ${({ theme }) => theme.color.purple_dark};
  margin-left: ${widthPercentageToDP(7)}px;

  color: ${({ theme }) => theme.color.purple_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(17)}px;

  text-align: center;
  margin-top: ${RFValue(14)}px;
  margin-bottom: ${RFValue(31)}px;
`;

export const ItemColorContainer = styled.View`
  flex-direction: row;
  height: ${RFValue(41)}px;
  border-radius: ${RFValue(20)}px;
  margin: ${RFValue(12)}px ${widthPercentageToDP(7)}px ${RFValue(37)}px;
  overflow: hidden;
`;

export const ItemColor = styled.TouchableOpacity<ItemColorProps>`
  flex: 1;
  ${({ color }) =>
    color === 'purple' &&
    css`
      background: ${({ theme }) => theme.color.purple_light};
    `}
  ${({ color, active }) =>
    color === 'purple' &&
    !active &&
    css`
      background: ${({ theme }) => theme.color.purple_light}70;
    `}

  ${({ color }) =>
    color === 'blue' &&
    css`
      background: ${({ theme }) => theme.color.blue};
    `}

    ${({ color, active }) =>
    color === 'blue' &&
    !active &&
    css`
      background: ${({ theme }) => theme.color.blue}70;
    `}
    
    ${({ color }) =>
    color === 'green' &&
    css`
      background: ${({ theme }) => theme.color.green};
    `}
       
    ${({ color, active }) =>
    color === 'green' &&
    !active &&
    css`
      background: ${({ theme }) => theme.color.green}70;
    `}

    ${({ color }) =>
    color === 'orange' &&
    css`
      background: ${({ theme }) => theme.color.orange};
    `}

    ${({ color, active }) =>
    color === 'orange' &&
    !active &&
    css`
      background: ${({ theme }) => theme.color.orange}70;
    `}

    ${({ color }) =>
    color === 'yellow' &&
    css`
      background: ${({ theme }) => theme.color.yellow};
    `}

    ${({ color, active }) =>
    color === 'yellow' &&
    !active &&
    css`
      background: ${({ theme }) => theme.color.yellow}70;
    `}
`;

export const QuantityInput = styled.TextInput`
  width: ${widthPercentageToDP(40)}px;
  height: ${heightPercentageToDP(6)}px;
  border-radius: ${heightPercentageToDP(10)}px;
  margin-left: ${widthPercentageToDP(7)}px;

  color: ${({ theme }) => theme.color.purple_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(17)}px;

  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.purple_dark};
  margin-top: ${RFValue(14)}px;
  margin-bottom: ${RFValue(31)}px;
`;
