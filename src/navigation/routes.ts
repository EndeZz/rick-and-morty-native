import {
  ParamListBase,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum routes {
  TabNavigation = 'TabNavigation',
  CharacterStackScreen = 'CharacterStackScreen',
  CharacterDetailScreen = 'CharacterDetailScreen',
  CharacterScreen = 'CharacterScreen',
  CharacterFilter = 'CharacterFilter',
  LocationStackScreen = 'LocationStackScreen',
  LocationDetailScreen = 'LocationDetail',
  LocationScreen = 'LocationScreen',
  LocationFilter = 'LocationFilter',
  EpisodeStackScreen = 'EpisodeStackScreen',
  EpisodeDetailScreen = 'EpisodeDetail',
  EpisodeScreen = 'EpisodeScreen',
  EpisodeFilter = 'EpisodeFilter',
}

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, routes>>();
