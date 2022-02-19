import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const SearchAndAddContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${widthPercentageToDP(5)}px;
`;

export const SearchContainer = styled.TextInput`
  width: ${widthPercentageToDP(60)}px;
  height: ${heightPercentageToDP(7)}px;
  background: ${({ theme }) => theme.color.button};
  border-radius: 10px;
  margin-left: ${widthPercentageToDP(7)}px;
  padding-left: 26px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.text_header};
`;

export const AddItemButton = styled.TouchableOpacity`
  height: ${heightPercentageToDP(7)}px;
  padding: 7px;
  /* width: ${heightPercentageToDP(10)}px; */
  background: ${({ theme }) => theme.color.button_secondary};
  margin-left: ${widthPercentageToDP(2)}px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const AddItemButtonText = styled.Text`
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${widthPercentageToDP(4.5)}px;
`;

export const ItemsTitle = styled.Text`
  font-size: ${heightPercentageToDP(3.5)}px;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: ${heightPercentageToDP(4)}px ${widthPercentageToDP(7)}px;
`;
