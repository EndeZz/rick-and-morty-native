import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { routes, CharacterStackParamList } from 'src/navigation';
import { CharacterDetailScreen, CharacterScreen } from 'src/screens';
import { theme } from 'src/styles';
import { ButtonGoBack } from 'src/ui';

const CharacterStack = createNativeStackNavigator<CharacterStackParamList>();

export const CharacterStackScreen = () => {
  return (
    <CharacterStack.Navigator
      initialRouteName={routes.CharacterScreen}
      screenOptions={{
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: theme.typography.black,
        },
      }}>
      <CharacterStack.Screen
        name={routes.CharacterScreen}
        component={CharacterScreen}
        options={{ headerShown: false }}
      />
      <CharacterStack.Screen
        name={routes.CharacterDetailScreen}
        component={CharacterDetailScreen}
        options={({ route }) => ({
          headerTitleAlign: 'center',
          headerTitle: route.params.name,
          headerLeft: () => <ButtonGoBack />,
        })}
      />
    </CharacterStack.Navigator>
  );
};
