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
`;

export const ModalTitle = styled.Text`
  font-size: ${widthPercentageToDP(7)}px;
  color: ${({ theme }) => theme.color.text_dark};
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
`;

export const Input = styled.TextInput`
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.color.primary};
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
`;

export const PriceInput = styled.TextInput`
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.color.primary};
  min-width: ${widthPercentageToDP(7)}px;
  text-align: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: ${heightPercentageToDP(9)}px;
  background: ${({ theme }) => theme.color.button_secondary};
  /* border-top-right-radius: ${widthPercentageToDP(7)}px; */
  margin-top: ${heightPercentageToDP(4)}px;
  justify-content: center;
  align-items: center;
`;
export const SubmitText = styled.Text`
  font-size: ${widthPercentageToDP(6)}px;
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
