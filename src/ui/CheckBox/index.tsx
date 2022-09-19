import React, { FC } from 'react';
import { CheckBoxChecked, CheckBoxWrapper } from './styled';

interface CheckBoxProps {
  isSelected?: boolean;
}

export const CheckBox: FC<CheckBoxProps> = ({ isSelected }) => {
  return (
    <CheckBoxWrapper isSelected={isSelected}>
      <CheckBoxChecked isSelected={isSelected} />
    </CheckBoxWrapper>
  );
};
