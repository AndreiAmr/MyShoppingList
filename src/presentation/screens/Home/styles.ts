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
  margin-top: ${heightPercentageToDP(7)}px;
  margin-left: ${widthPercentageToDP(7)}px;
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

export const OptionsContainer = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.primary};
  max-width: ${widthPercentageToDP(90)}px;
  border-top-right-radius: ${widthPercentageToDP(10)}px;
  margin-top: ${heightPercentageToDP(7)}px;
  justify-content: center;
  align-items: center;
`;

export const OptionButton = styled.TouchableOpacity`
  width: 80%;
  height: ${heightPercentageToDP(7)}px;
  background: ${({ theme }) => theme.color.button};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;

  margin: ${heightPercentageToDP(10)}px auto;
`;

export const OptionText = styled.Text`
  font-size: ${widthPercentageToDP(6)}px;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  flex: 1;
  text-align: center;
`;
