import React, { FC } from 'react';
import { Container } from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Container>{children}</Container>
);
