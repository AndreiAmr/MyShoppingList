import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

interface GreetingProps {
  highlighted: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const GreetingsContainer = styled.View`
  background: ${({ theme }) => theme.color.button_secondary};
  padding-bottom: ${heightPercentageToDP(5)}px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const Greeting = styled.Text<GreetingProps>`
  font-size: ${widthPercentageToDP(9)}px;
  color: ${({ highlighted, theme }) =>
    highlighted ? theme.color.primary : theme.color.text_header};
  font-family: ${({ theme, highlighted }) =>
    highlighted ? theme.fonts.bold : theme.fonts.medium};
`;

export const WishTodayText = styled.Text`
  font-size: ${widthPercentageToDP(6)}px;
  color: ${({ theme }) => theme.color.text_header};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: ${heightPercentageToDP(7)}px;
  margin-left: ${widthPercentageToDP(7)}px;
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
