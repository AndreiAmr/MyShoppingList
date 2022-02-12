import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled, { css } from 'styled-components/native';

interface ButtonProps {
  bottomLeft?: boolean;
  topLeft?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
  justify-content: center;
  align-items: center;
`;

export const AppName = styled.Text`
  font-size: ${widthPercentageToDP('11%')}px;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
  font-size: ${widthPercentageToDP('5%')}px;
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: ${heightPercentageToDP(10)}px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  height: ${heightPercentageToDP('7%')}px;
  width: ${widthPercentageToDP(80)}px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 15px;
  ${({ bottomLeft }) =>
    bottomLeft &&
    css`
      border-bottom-left-radius: 0px;
    `};
  ${({ topLeft }) =>
    topLeft &&
    css`
      border-top-left-radius: 0px;
    `};
  align-items: center;
  justify-content: center;
  margin: 2.5px;
`;

export const ButtonText = styled.Text`
  font-size: ${widthPercentageToDP('6%')}px;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;
