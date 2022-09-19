import React, { FC, useCallback } from 'react';
import { routes, useNavigation } from 'src/navigation';
import { ICharacterCard } from 'src/models/character.interface';
import { CardBox, CardImg, CardItem, CardStatus, CardTitle } from './styled';

export const Card: FC<ICharacterCard> = ({ id, name, status, image }) => {
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
