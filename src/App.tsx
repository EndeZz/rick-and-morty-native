import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components/native';
import { theme } from 'src/styles';
import { Check } from 'src/components';

const TextApp = styled.Text`
  color: ${theme.color.primary};
`;

export const App = () => {
  return (
    <View>
      <TextApp>App</TextApp>
      <Check />
    </View>
  );
};
