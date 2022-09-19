import React, { FC } from 'react';
import { View } from 'react-native';
import { categoryFields } from 'src/constants/filter.category';
import { ButtonApply, ButtonClear, Layout } from 'src/ui';
import { FilterList } from '../FilterList';
import { SearchList } from '../SearchList';
import { FilterHeader, Title } from './styled';

export const FilterDisplay: FC = () => {
  /////////////////////////
  //TODO: Избавиться от тестового кода при последующей реализации фильтра
  const leftVisible = false;
  /////////////////////////

  return (
    <Layout>
      <FilterHeader>
        {leftVisible ? <ButtonClear /> : <View />}
        <Title>Filter</Title>
        <ButtonApply />
      </FilterHeader>

      <SearchList />

      <FilterList category="Status" fields={categoryFields.status} />
      <FilterList category="Gender" fields={categoryFields.gender} />
    </Layout>
  );
};
