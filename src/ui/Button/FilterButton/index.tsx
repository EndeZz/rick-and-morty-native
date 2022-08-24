import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';
import { FilterTitle, FilterWrapper } from '../styled';

interface IFilterButton {
  onPress: (event: GestureResponderEvent) => void;
}

export const FilterButton: FC<IFilterButton> = ({ onPress }) => {
  return (
    <FilterWrapper onPress={onPress}>
      <FilterTitle>Filter</FilterTitle>
    </FilterWrapper>
  );
};
