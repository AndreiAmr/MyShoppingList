import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const WishTodayText = styled.Text`
  font-size: ${widthPercentageToDP(6)}px;
  color: ${({ theme }) => theme.color.purple_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: ${heightPercentageToDP(5)}px;
  margin-left: ${widthPercentageToDP(7)}px;
  margin-bottom: ${heightPercentageToDP(8)}px;
`;

export const OptionButton = styled.TouchableOpacity`
  width: 80%;
  height: ${heightPercentageToDP(7)}px;
  background: ${({ theme }) => theme.color.button_secondary};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;

  margin: ${heightPercentageToDP(10)}px auto;
`;

export const OptionText = styled.Text`
  font-size: ${widthPercentageToDP(6)}px;
  color: ${({ theme }) => theme.color.button};
  font-family: ${({ theme }) => theme.fonts.medium};
  flex: 1;
  text-align: center;
`;
