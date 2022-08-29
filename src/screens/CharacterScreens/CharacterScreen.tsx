import React, { useCallback } from 'react';
import { Card, Header } from 'src/components';
import { List } from './styled';
import { Layout, Loader, StatusBar } from 'src/ui';
import { routes, useNavigation } from 'src/navigation';
import { useGetCharactersQuery } from 'src/generated/graphql';

export const CharacterScreen = () => {
  const navigation = useNavigation();
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
