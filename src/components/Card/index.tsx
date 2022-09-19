import React, { FC } from 'react';
import { routes, useNavigation } from 'src/navigation';
import { ICharacterCard } from 'src/models/character.interface';
import { CardBox, CardImg, CardItem, CardStatus, CardTitle } from './styled';

export const Card: FC<ICharacterCard> = ({ id, name, status, image }) => {
  const navigation = useNavigation();

  const handleNavigateToScreen = () => {
    navigation.navigate(routes.CharacterStackScreen, {
      screen: routes.CharacterDetailScreen,
      params: { id, name },
    });
  };

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
