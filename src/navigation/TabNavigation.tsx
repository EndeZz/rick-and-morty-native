import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from 'src/styles';
import { CharacterStackScreen } from './CharacterStack';
import { EpisodeScreen, LocationScreen } from 'src/screens';
import { routes } from 'src/constants/routes';
import { CharacterIcon, EpisodeIcon, LocationIcon } from 'src/ui';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.color.primary,
      }}>
      <Tab.Screen
        name={routes.CharacterStackScreen}
        component={CharacterStackScreen}
        options={{
          tabBarLabel: 'Character',
          tabBarIcon: ({ focused }) => <CharacterIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name={routes.LocationScreen}
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ focused }) => <LocationIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name={routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          tabBarLabel: 'Episode',
          tabBarIcon: ({ focused }) => <EpisodeIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};
