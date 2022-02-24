import React from 'react';
import { ButtonProps } from '../../../types/components/button';

import * as S from './styles';

const Button = ({ label, color, onPress, disabled }: ButtonProps) => {
  return (
    <S.Container onPress={onPress} color={color} disabled={disabled}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};

export default Button;
