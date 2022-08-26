import React, { FC } from 'react';
import { FilterButton } from 'src/ui';
import { Title, Wrapper } from './styled';

interface HeaderProps {
  title: string;
  onPress?: () => void;
}

export const Header: FC<HeaderProps> = ({ title, onPress }) => (
  <Wrapper>
    <FilterButton onPress={onPress} />
    <Title>{title}</Title>
  </Wrapper>
);
