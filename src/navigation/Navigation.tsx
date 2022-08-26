import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './TabNavigation';
import { routes } from 'src/constants/routes';
import { FilterDisplay } from 'src/components/FilterDisplay';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={routes.TabNavigation}>
        <Stack.Screen name={routes.TabNavigation} component={TabNavigation} />

        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}>
          <Stack.Screen
            name={routes.CharacterFilter}
            component={FilterDisplay}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
