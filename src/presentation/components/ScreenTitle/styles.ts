import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${heightPercentageToDP(7)}px;
  margin-left: ${widthPercentageToDP(7)}px;
`;

export const NormalText = styled.Text`
  color: ${({ theme }) => theme.color.button};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${widthPercentageToDP(8)}px;
`;

export const HighLighted = styled.Text`
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${widthPercentageToDP(8)}px;
`;
