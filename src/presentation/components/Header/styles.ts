import { widthPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const GoBackLabel = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${widthPercentageToDP(6)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${widthPercentageToDP(7)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
