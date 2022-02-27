import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const TotalSumContainer = styled.View`
  width: 100%;
  height: ${heightPercentageToDP(20)}px;
  background: ${({ theme }) => theme.color.green};
`;

export const TotalTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.light};
  margin: ${RFValue(23)}px ${RFValue(19)}px 0;
`;

export const TotalSum = styled.Text`
  font-size: ${RFValue(27)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.light};
  margin: ${RFValue(0)}px ${RFValue(42)}px;
`;

export const AddReceiptContainer = styled.TouchableOpacity`
  height: ${heightPercentageToDP(30)}px;
  width: 90%;
  background: ${({ theme }) => theme.color.purple_light};
  margin: ${RFValue(29)}px auto;
  border-radius: ${RFValue(15)}px;
  justify-content: center;
  align-items: center;
`;

export const AddReceiptText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.color.light};

  text-align: center;
`;
