import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: ${heightPercentageToDP(13)}px;
  min-height: ${heightPercentageToDP(13)}px;
  margin: ${heightPercentageToDP(0.5)}px ${widthPercentageToDP(7)}px;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.button};
  overflow: hidden;
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
`;

export const Note = styled.Text`
  color: ${({ theme }) => theme.color.button_secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${heightPercentageToDP(2.5)}px;
  /* margin-top: ${heightPercentageToDP(1.5)}px; */
  margin-left: ${widthPercentageToDP(7.5)}px;
  flex-wrap: nowrap;
`;

export const QuantityContainer = styled.View`
  height: 100%;
  width: 30%;
  background: ${({ theme }) => theme.color.primary};
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
