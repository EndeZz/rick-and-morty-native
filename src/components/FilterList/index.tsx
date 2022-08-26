import React, { FC, useState } from 'react';
import { FlatList, View } from 'react-native';
import { FilterItem } from '../FilterItem';
import { FilterContent, FilterLine, FilterTitle } from './styled';

interface FilterListProps {
  category: string;
  data: any;
}

export const FilterList: FC<FilterListProps> = ({ category, data }) => {
  return (
    <View>
      <FilterTitle>{category}</FilterTitle>
      <FilterContent>
        <FlatList
          data={data}
          renderItem={({ item }) => <FilterItem title={item.title} />}
          ItemSeparatorComponent={FilterLine}
        />
      </FilterContent>
    </View>
  );
};
