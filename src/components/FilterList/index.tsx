import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { FilterItem } from '../FilterItem';
import { FilterContent, FilterLine, FilterTitle } from './styled';

interface FilterListProps {
  category: string;
  fields: string[];
}

export const FilterList: FC<FilterListProps> = ({ category, fields }) => {
  return (
    <View>
      <FilterTitle>{category}</FilterTitle>
      <FilterContent>
        <FlatList
          data={fields}
          renderItem={({ item }) => <FilterItem title={item} />}
          ItemSeparatorComponent={FilterLine}
          keyExtractor={item => item}
        />
      </FilterContent>
    </View>
  );
};
