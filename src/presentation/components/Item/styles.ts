import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

interface ContainerProps {
  itemColor: string;
}
interface PriorityLevelTextProps {
  itemColor: string;
}

export const Wrapper = styled(Animated.View)``;

export const Container = styled.View<ContainerProps>`
  position: relative;
  flex: 1;
  flex-direction: row;
  max-height: ${heightPercentageToDP(10)}px;
  min-height: ${heightPercentageToDP(10)}px;
  margin: 0 ${widthPercentageToDP(7)}px;
  border-radius: 15px;
  background: ${({ itemColor }) => itemColor};

  elevation: 7;

  align-items: center;
`;

export const PriorityLevelContainer = styled.View`
  width: ${RFValue(35)}px;
  height: ${RFValue(28)}px;
  background: ${({ theme }) => theme.color.light};
  border-radius: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(20)}px;
`;

export const PriorityLevelText = styled.Text<PriorityLevelTextProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ itemColor }) => itemColor};
`;

export const NameContaiener = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(19)}px;
  margin-left: ${widthPercentageToDP(5.5)}px;
  text-align: left;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  text-align: left;
  margin-left: ${widthPercentageToDP(5.5)}px;
  flex-wrap: nowrap;
`;

export const PriceContainer = styled.View`
  align-items: flex-end;
  margin-right: ${RFValue(15)}px;
`;

export const Price = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.light};
  margin-top: ${RFValue(5)}px;
  margin-right: ${RFValue(9)}px;
`;

export const IconDeleteContainer = styled(Animated.View)`
  height: ${heightPercentageToDP(10)}px;
  width: ${heightPercentageToDP(10)}px;
  position: absolute;
  right: 10%;

  justify-content: center;
  align-items: center;
  z-index: -1;
`;
