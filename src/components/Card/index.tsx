import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { ImageSourcePropType } from 'react-native';
import { routes } from 'src/constants/routes';
import { Character } from 'src/generated/graphql';
import { CardBox, CardImg, CardItem, CardStatus, CardTitle } from './styled';

interface CardProps {
  name: Character;
  status: Character;
  species: Character;
  image: ImageSourcePropType;
}

export const Card: FC<CardProps> = ({ name, status, species, image }) => {
  const navigation = useNavigation<any>();

  const handleNavigateToScreen = () => {
    return navigation.navigate(routes.CharacterStackScreen, {
      screen: routes.CharacterDetailScreen,
      params: { name, status, species, image },
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
