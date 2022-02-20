import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const NewItemContainer = styled.TouchableOpacity`
  width: ${widthPercentageToDP(80)}px;
  background: ${({ theme }) => theme.color.light};
  overflow: hidden;
  margin: auto auto;
  elevation: 14;
  border-radius: 15px;
`;

export const ModalContent = styled.TouchableOpacity`
  flex: 1;
  background: ${({ theme }) => theme.color.primary}70;
`;

export const ModalTitle = styled.Text`
  font-size: ${widthPercentageToDP(7)}px;
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  margin: ${heightPercentageToDP(3)}px;
`;

export const InputContainer = styled.View`
  margin: 10px ${widthPercentageToDP(6)}px;
`;

export const InputLabel = styled.Text`
  font-size: ${widthPercentageToDP(6)}px;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  background: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.text_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  border-radius: 9px;
  padding-left: 10px;
`;

export const PriceAndQuantityContainer = styled.View`
  flex-direction: row;
  padding: 0 ${widthPercentageToDP(7)}px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PriceContainer = styled.View``;

export const PriceTitle = styled.Text`
  font-size: ${widthPercentageToDP(6)}px;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: 5px;
`;

export const PriceInput = styled.TextInput`
  min-width: ${widthPercentageToDP(19)}px;
  text-align: center;
  background: ${({ theme }) => theme.color.button};
  border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: ${heightPercentageToDP(9)}px;
  background: ${({ theme }) => theme.color.text_dark};
  margin-top: ${heightPercentageToDP(4)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: -2px;
`;
export const SubmitText = styled.Text`
  font-size: ${widthPercentageToDP(6)}px;
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
