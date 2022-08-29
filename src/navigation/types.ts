import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { routes } from 'src/navigation';

export type CharacterStackParamList = {
  [routes.CharacterScreen]: undefined;
  [routes.CharacterStackScreen]: undefined;
  [routes.CharacterDetailScreen]: {
    id: string;
    name: string;
  };
  [routes.CharacterFilter]: undefined;
};

export type CharacterScreenNavigation =
  NativeStackNavigationProp<CharacterStackParamList>;

export type CharacterScreenRouteProp = RouteProp<CharacterStackParamList>;
