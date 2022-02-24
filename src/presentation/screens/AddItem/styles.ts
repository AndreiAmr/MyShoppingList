import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: ${RFValue(46)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.color.button_secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: ${widthPercentageToDP(7)}px;
`;

export const NameInput = styled.TextInput`
  height: ${heightPercentageToDP(6)}px;
  border-radius: ${heightPercentageToDP(10)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.color.purple_dark};

  margin: ${RFValue(8)}px ${widthPercentageToDP(7)}px
    ${heightPercentageToDP(6)}px;

  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.purple_dark};
  text-align: center;
`;

export const PriorityLevelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(37)}px;
`;

export const PriorityButton = styled.TouchableOpacity`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;
  background: ${({ theme }) => theme.color.purple_light};
  margin: ${RFValue(14)}px ${RFValue(7)}px;

  align-items: center;
  justify-content: center;
`;

export const PriotyText = styled.Text`
  color: ${({ theme }) => theme.color.light};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const PriceTextInput = styled.TextInput`
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
  height: ${RFValue(41)}px;
  border-radius: ${RFValue(20)}px;
  border: 2px solid blue;
  margin: ${RFValue(12)}px ${widthPercentageToDP(7)}px;
`;

export const ItemColor = styled.TouchableOpacity`
  flex: 1;
`;
