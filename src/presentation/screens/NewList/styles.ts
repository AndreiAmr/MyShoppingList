import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const TitleContainer = styled.View`
  background: ${({ theme }) => theme.color.button_secondary};
  padding-bottom: 30px;
  elevation: 20;
`;

export const SearchAndAddContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${widthPercentageToDP(5)}px;
`;

export const SearchInput = styled.TextInput`
  width: ${widthPercentageToDP(60)}px;
  height: ${heightPercentageToDP(7)}px;
  background: ${({ theme }) => theme.color.button};
  border-radius: 10px;
  margin-left: ${widthPercentageToDP(7)}px;
  padding-left: 26px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.text_header};
  elevation: 20;
`;

export const AddItemButton = styled.TouchableOpacity`
  height: ${heightPercentageToDP(7)}px;
  padding: 7px;
  /* width: ${heightPercentageToDP(10)}px; */
  background: ${({ theme }) => theme.color.button};
  margin-left: ${widthPercentageToDP(2)}px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const AddItemButtonText = styled.Text`
  color: ${({ theme }) => theme.color.button_secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${widthPercentageToDP(4.5)}px;
  elevation: 20;
`;

export const ItemsTitle = styled.Text`
  font-size: ${heightPercentageToDP(4)}px;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: ${heightPercentageToDP(4)}px ${widthPercentageToDP(7)}px;
`;

export const ItemsContainer = styled.ScrollView``;
