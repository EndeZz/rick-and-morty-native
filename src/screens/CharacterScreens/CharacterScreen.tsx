import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card, Header } from 'src/components';
import { routes } from 'src/constants/routes';
import { List } from './styled';
import { Layout, Loader, StatusBar } from 'src/ui';
import { CharacterScreenNavigation } from 'src/navigation/type';
import { useGetCharactersQuery } from 'src/generated/graphql';

export const CharacterScreen = () => {
  const navigation = useNavigation<CharacterScreenNavigation>();
  const { data, loading } = useGetCharactersQuery();

  const charactersValues = data?.characters?.results;

  const handleNavigateToScreen = useCallback(() => {
    navigation.navigate(routes.CharacterFilter);
  }, [navigation]);

  return (
    <>
      <StatusBar />

      <Layout>
        <Header title="Character" onPress={handleNavigateToScreen} />

        {loading ? (
          <Loader />
        ) : (
          <List
            data={charactersValues}
            renderItem={({ item }: any) => <Card {...item} />}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        )}
      </Layout>
    </>
  );
};
