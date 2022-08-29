import React, { FC, useCallback } from 'react';
import { ImageSourcePropType } from 'react-native';
import { routes, useNavigation } from 'src/navigation';
import { CardBox, CardImg, CardItem, CardStatus, CardTitle } from './styled';

export interface CardProps {
  id: string;
  name: string;
  status: string;
  image: ImageSourcePropType;
}

export const Card: FC<CardProps> = ({ id, name, status, image }) => {
  const navigation = useNavigation();

  const handleNavigateToScreen = useCallback(() => {
    navigation.navigate(routes.CharacterStackScreen, {
      screen: routes.CharacterDetailScreen,
      params: { id, name },
    });
  }, [navigation]);

  return (
    <CardItem onPress={handleNavigateToScreen}>
      <CardImg source={{ uri: image }} />
      <CardBox>
        <CardStatus>{status}</CardStatus>
        <CardTitle>{name}</CardTitle>
      </CardBox>
    </CardItem>
  );
};
