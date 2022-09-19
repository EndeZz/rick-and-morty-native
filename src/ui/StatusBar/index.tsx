import React, { FC } from 'react';
import { StatusBar as StatusBarElement } from 'react-native';
import { theme } from 'src/styles';

export const StatusBar: FC = () => (
  <StatusBarElement
    barStyle={'dark-content'}
    backgroundColor={theme.color.white}
  />
);
