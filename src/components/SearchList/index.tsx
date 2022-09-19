import React, { FC } from 'react';
import { SearchItem } from '../SearchItem';
import { SearchListWrapper } from './styled';

export const SearchList: FC = () => {
  return (
    <SearchListWrapper>
      <SearchItem title="Name" caption="Give a name" />

      <SearchItem title="Species" caption="Enter species" />
    </SearchListWrapper>
  );
};
