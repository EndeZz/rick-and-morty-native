import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './TabNavigation';
import { routes } from 'src/constants/routes';
import { FilterList } from 'src/components/FilterList';

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={routes.TabNavigation}>
        <Stack.Screen name={routes.TabNavigation} component={TabNavigation} />

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name={routes.CharacterFilter}
            component={FilterList}
            options={{ animation: 'slide_from_bottom' }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
