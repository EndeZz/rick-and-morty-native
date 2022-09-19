import React, { FC, useState } from 'react';
import { CheckBox } from 'src/ui';
import { FilterBlockWrapper, FilterCaption, FilterInner } from './styled';

interface FilterItemProps {
  title: string;
}

export const FilterItem: FC<FilterItemProps> = ({ title }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleChangeSelected = () => {
    setIsSelected(prev => !prev);
  };

  return (
    <FilterBlockWrapper onPress={handleChangeSelected}>
      <CheckBox isSelected={isSelected} />
      <FilterInner>
        <FilterCaption>{title}</FilterCaption>
      </FilterInner>
    </FilterBlockWrapper>
  );
};
