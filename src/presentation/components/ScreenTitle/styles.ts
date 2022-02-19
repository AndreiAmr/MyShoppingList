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
  color: ${({ theme }) => theme.color.text_header};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${widthPercentageToDP(8)}px;
`;

export const HighLighted = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${widthPercentageToDP(8)}px;
`;
