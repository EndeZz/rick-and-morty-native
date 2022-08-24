import React from 'react';
import { theme } from 'src/styles';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Text } from 'react-native';
import { Card } from 'src/components';
import { routes } from 'src/constants/routes';
import { useAllCharactersQuery } from 'src/generated/graphql';
import { List, Title, Wrapper } from './styled';
import { FilterButton, Layout } from 'src/ui';

export const CharacterScreen = () => {
  const navigation = useNavigation();
  const { data, loading } = useAllCharactersQuery();
  const charactersValues = data?.characters?.results;

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.color.white}
      />
      <Layout>
        <Wrapper>
          <FilterButton
            onPress={() => navigation.navigate(routes.CharacterFilter)}
          />
          <Title>Character</Title>
        </Wrapper>

        {loading ? (
          <Text>Загрузка</Text>
        ) : (
          <List
            data={charactersValues}
            renderItem={({ item }: any) => <Card {...item} />}
            keyExtractor={({ id }: any) => id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        )}
      </Layout>
    </>
  );
};
