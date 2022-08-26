import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { FilterTitle, FilterWrapper } from './styled';

interface IFilterButton {
  onPress?: () => void;
}

export const FilterButton: FC<IFilterButton & TouchableOpacityProps> = ({
  onPress,
}) => (
  <FilterWrapper onPress={onPress}>
    <FilterTitle>Filter</FilterTitle>
  </FilterWrapper>
);
