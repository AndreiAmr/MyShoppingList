import { heightPercentageToDP } from 'react-native-responsive-screen';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonColorProps } from '../../../types/components/button';

interface FilterButtonProps {
  color: ButtonColorProps;
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
`;

export const SearchContainer = styled.View`
  width: 100%;
  padding: ${RFValue(10)}px 0;
  background: ${({ theme }) => theme.color.purple_light};
`;

export const SearchInput = styled.TextInput`
  height: ${heightPercentageToDP(6)}px;
  width: 90%;
  background: ${({ theme }) => theme.color.light};
  border-radius: ${heightPercentageToDP(8)}px;
  margin: auto auto;

  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.purple_light};
  text-align: center;
  font-size: ${RFValue(15)}px;
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: ${RFValue(10)}px;
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
  padding: ${RFValue(7)}px ${RFValue(12)}px;
  border-radius: ${RFValue(22)}px;

  ${({ color, theme }) =>
    color === 'purple' &&
    css`
      background: ${theme.color.purple_dark};
    `}

  ${({ color, theme }) =>
    color === 'green' &&
    css`
      background: ${theme.color.green};
    `}

    ${({ color, theme }) =>
    color === 'orange' &&
    css`
      background: ${theme.color.orange};
    `}
    

  ${({ color, theme, active }) =>
    color === 'purple' &&
    !active &&
    css`
      background: ${theme.color.purple_dark}70;
    `}

    ${({ color, theme, active }) =>
    color === 'green' &&
    !active &&
    css`
      background: ${theme.color.green}70;
    `}
    
    ${({ color, theme, active }) =>
    color === 'orange' &&
    !active &&
    css`
      background: ${theme.color.orange}70;
    `}
`;

export const FilterText = styled.Text`
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
export const ItemsContainer = styled.ScrollView``;
