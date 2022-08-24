import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';
import { FilterTitle, FilterWrapper } from '../FilterButton/styled';
import { ButtonClearTitle, ButtonClearWrapper } from './styled';

interface IButtonClear {
  onPress?: (event: GestureResponderEvent) => void;
}

export const ButtonClear: FC<IButtonClear> = ({ onPress }) => {
  return (
    <ButtonClearWrapper onPress={onPress}>
      <ButtonClearTitle>Clear</ButtonClearTitle>
    </ButtonClearWrapper>
  );
};
