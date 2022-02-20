import { heightPercentageToDP } from 'react-native-responsive-screen';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  focused: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 60px;
  width: 60px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
  padding-top: 20px;

  ${({ focused }) =>
    focused &&
    css`
      padding-top: 0px;
      margin-bottom: 25px;
      background: ${({ theme }) => theme.color.button_secondary};
    `}
`;

export const Label = styled.Text`
  font-size: ${heightPercentageToDP(2)}px;
  color: ${({ theme }) => theme.color.button_secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
