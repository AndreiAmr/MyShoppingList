import styled from 'styled-components/native';

interface ContainerProps {
  focused: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 60px;
  width: 60px;

  justify-content: center;
  align-items: center;
  padding-top: 0px;
  margin-bottom: 25px;
  background: ${({ theme }) => theme.color.blue};
  border-radius: 30px;
`;
