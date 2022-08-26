import React, { FC } from 'react';
import { View } from 'react-native';
import { ButtonApply, ButtonClear, Layout } from 'src/ui';
import { FilterList } from '../FilterList';
import { SearchList } from '../SearchList';
import { FilterHeader, Title } from './styled';

export const FilterDisplay: FC = () => {
  /////////////////////////
  //TODO: Избавиться от тестового кода при последующей реализации фильтра
  const leftVisible = false;
  const dataStatus = [
    { title: 'Alive' },
    { title: 'Dead' },
    { title: 'Unknown' },
  ];

  const dataGender = [
    { title: 'Female' },
    { title: 'Male' },
    { title: 'Genderless' },
    { title: 'Unknown' },
  ];
  /////////////////////////

  return (
    <Layout>
      <FilterHeader>
        {leftVisible ? <ButtonClear /> : <View />}
        <Title>Filter</Title>
        <ButtonApply />
      </FilterHeader>

      <SearchList />

      <FilterList category="Status" data={dataStatus} />
      <FilterList category="Gender" data={dataGender} />
    </Layout>
  );
};
