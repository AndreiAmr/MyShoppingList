import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  max-height: ${heightPercentageToDP(10)}px;
  min-height: ${heightPercentageToDP(10)}px;
  margin: ${heightPercentageToDP(1.3)}px ${widthPercentageToDP(7)}px;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.button};
  overflow: hidden;
  elevation: 7;
`;

export const NameContaiener = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.color.text_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${heightPercentageToDP(3)}px;
  margin-top: ${heightPercentageToDP(1.5)}px;
  margin-left: ${widthPercentageToDP(5.5)}px;
  text-align: center;
`;

export const Note = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${heightPercentageToDP(2)}px;
  text-align: center;
  margin-left: ${widthPercentageToDP(7.5)}px;
  flex-wrap: nowrap;
`;

export const QuantityContainer = styled.View`
  height: 100%;
  width: 30%;
  background: ${({ theme }) => theme.color.button_secondary};
  border-top-left-radius: ${heightPercentageToDP(5)}px;
  border-bottom-left-radius: ${heightPercentageToDP(5)}px;

  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.Text<{ small?: boolean }>`
  color: #fff;
  font-size: ${({ small }) =>
    small ? heightPercentageToDP(3) : heightPercentageToDP(5)};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
