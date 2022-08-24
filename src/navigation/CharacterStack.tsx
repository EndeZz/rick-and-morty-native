import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { routes } from 'src/constants/routes';
import { CharacterDetailScreen, CharacterScreen } from 'src/screens';
import { ButtonGoBack } from 'src/ui/Button';

const CharacterStack = createNativeStackNavigator();

export const CharacterStackScreen = () => {
  return (
    <CharacterStack.Navigator
      initialRouteName={routes.CharacterScreen}
      screenOptions={{
        headerTitleStyle: {
          fontSize: 15,
          fontFamily: 'Roboto-Black',
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
        options={({ route }: any) => ({
          headerTitleAlign: 'center',
          headerTitle: route.params.name,
          headerLeft: () => <ButtonGoBack />,
        })}
      />
    </CharacterStack.Navigator>
  );
};
