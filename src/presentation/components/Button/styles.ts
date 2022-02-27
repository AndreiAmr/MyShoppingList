import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled, { css } from 'styled-components/native';
import { ButtonColorProps } from '../../../types/components/button';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: ButtonColorProps;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${widthPercentageToDP(80)}px;
  height: ${heightPercentageToDP(7)}px;
  border-radius: ${widthPercentageToDP(8.5)}px;
  align-items: center;
  justify-content: center;
  margin: ${RFValue(6)}px auto;

  ${({ color }) =>
    color === 'purple' &&
    css`
      background: ${({ theme }) => theme.color.purple_light};
    `};

  ${({ color }) =>
    color === 'blue' &&
    css`
      background: ${({ theme }) => theme.color.blue};
    `};

  ${({ color }) =>
    color === 'green' &&
    css`
      background: ${({ theme }) => theme.color.green};
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.color.disabled}80;
    `}
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(17)}px;
`;
