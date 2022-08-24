import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const CheckBoxWrapper = styled.View<{ isSelected: boolean }>`
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border: 1.5px solid
    ${({ isSelected }) =>
      isSelected ? theme.color.primary : theme.color.gray2};
  border-radius: 12px;
`;

export const CheckBoxChecked = styled.View<{ isSelected: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.color.primary : theme.color.white};
`;
