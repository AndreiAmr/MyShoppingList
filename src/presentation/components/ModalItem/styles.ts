import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

interface ButtonProps {
  deleteButton?: boolean;
}

export const Container = styled.View``;

export const Name = styled.Text`
  color: ${({ theme }) => theme.color.button_secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${heightPercentageToDP(4)}px;
  text-align: center;
  margin-top: 20px;
`;

export const Note = styled.Text`
  color: ${({ theme }) => theme.color.text_header};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${heightPercentageToDP(2.5)}px;
  text-align: center;
  margin: 10px ${widthPercentageToDP(5)}px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${widthPercentageToDP(40)}px;
  height: ${heightPercentageToDP(7)}px;
  border-radius: 10px;
  background: ${({ theme, deleteButton }) =>
    deleteButton ? `${theme.color.button}05` : theme.color.button_secondary};
  margin: 10px auto;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${({ theme, deleteButton }) =>
    deleteButton ? `${theme.color.button_secondary}` : theme.color.background};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${heightPercentageToDP(2.5)}px;
  text-align: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin: 10px ${widthPercentageToDP(5)}px;
  flex-wrap: wrap;
`;

export const RowText = styled.Text<{ keyText?: boolean }>`
  color: ${({ theme, keyText }) =>
    keyText ? theme.color.button_secondary : theme.color.text_header};
  font-size: ${widthPercentageToDP(5)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  flex-wrap: wrap;
  align-items: center;
`;

export const RowValue = styled.Text`
  color: ${({ theme }) => theme.color.text_header};
  font-size: ${widthPercentageToDP(5)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
