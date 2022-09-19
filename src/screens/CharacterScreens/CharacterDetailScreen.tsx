import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Loader, StatusBar } from 'src/ui';
import BackgroundPic from '../../../assets/images/pictures/character-background.png';
import { useRoute } from '@react-navigation/native';
import { useGetCharacterDetailsQuery } from 'src/generated/graphql';
import {
  BackgroundImage,
  Box,
  CharacterPic,
  Content,
  DetailContent,
  DetailLine,
  DetailTitle,
  DetailWrapper,
  Name,
  Section,
  Species,
  Status,
} from './styled';
import { DetailItem } from 'src/components';

export const CharacterDetailScreen = () => {
  const route = useRoute();

  const { data, loading } = useGetCharacterDetailsQuery({
    variables: {
      id: (route.params as { id: string }).id,
    },
  });

  const currentData = data?.character;

  return (
    <>
      <StatusBar />

      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <ScrollView>
            <Section>
              <BackgroundImage source={BackgroundPic} blurRadius={2} />
              <Content>
                <CharacterPic source={{ uri: currentData?.image }} />
                <Box>
                  <Status>{currentData?.status}</Status>
                  <Name>{currentData?.name}</Name>
                  <Species>{currentData?.species}</Species>
                </Box>
              </Content>
            </Section>

            <DetailWrapper>
              <DetailTitle>Informations</DetailTitle>

              <DetailContent>
                <DetailItem
                  title="Gender"
                  subtitle={currentData?.gender || 'Unknown'}
                />
                <DetailLine />
                <DetailItem
                  title="Origin"
                  subtitle={currentData?.origin?.name || 'Unknown'}
                />
                <DetailLine />
                <DetailItem
                  title="Type"
                  subtitle={currentData?.type || 'Unknown'}
                />
                <DetailLine />
                <DetailItem
                  title="Location"
                  subtitle={currentData?.location?.name || 'Unknown'}
                  isActiveEl
                />
              </DetailContent>
            </DetailWrapper>

            <DetailWrapper>
              <DetailTitle>Episodes</DetailTitle>

              <DetailContent>
                {currentData &&
                  currentData.episode.map((item, index) => (
                    <Fragment key={item?.id}>
                      <DetailItem
                        title={item?.episode || 'Unknown'}
                        subtitle={item?.name || 'Unknown'}
                        date={item?.air_date || 'Unknown'}
                        path={''}
                        isActiveEl
                      />
                      {currentData?.episode.length - 1 > index && (
                        <DetailLine />
                      )}
                    </Fragment>
                  ))}
              </DetailContent>
            </DetailWrapper>
          </ScrollView>
        )}
      </Layout>
    </>
  );
};
