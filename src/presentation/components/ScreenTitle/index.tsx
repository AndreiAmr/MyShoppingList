import React from 'react';
import * as S from './styles';

interface ScreenTitleProps {
  normal: string;
  highlighted: string;
}

const ScreenTitle = ({ highlighted, normal }: ScreenTitleProps) => {
  return (
    <S.Container>
      <S.NormalText>{normal}</S.NormalText>
      <S.HighLighted>{highlighted}</S.HighLighted>
    </S.Container>
  );
};

export default ScreenTitle;
