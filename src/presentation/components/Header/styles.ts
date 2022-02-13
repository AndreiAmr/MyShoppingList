import { widthPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  padding-bottom: 5px;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.color.button};
`;

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding-left: 6px;
`;

export const GoBackLabel = styled.Text`
  color: ${({ theme }) => theme.color.text_header};
  font-size: ${widthPercentageToDP(5)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.text_header};
  font-size: ${widthPercentageToDP(6)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  flex: 1;
  text-align: center;
  padding-right: ${widthPercentageToDP(12)}px;
`;
