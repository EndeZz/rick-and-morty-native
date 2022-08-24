import React from 'react';
import styled from 'styled-components/native';
import { theme } from 'src/styles';
import { StatusBar } from 'react-native';
import { Layout } from 'src/ui/Layout';
import BG from '../../../assets/images/pictures/character-background.png';
import { useRoute } from '@react-navigation/native';

const Section = styled.View`
  width: 100%;

  flex: 1;
  max-height: 254px;
  background-color: ${theme.color.gray6};
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 83px;
  position: absolute;
  resize-mode: cover;
`;
export const CharacterPic = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 80px;
  border: 5px solid ${theme.color.gray6};

  /* resize-mode: contain; */
`;

export const Status = styled.Text`
  font-family: ${theme.typography.regular};
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${theme.color.additional_text};
`;

export const Name = styled.Text`
  font-family: ${theme.typography.bold};
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.337647px;
  color: ${theme.color.black};
`;

export const Species = styled.Text`
  font-family: ${theme.typography.black};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
  text-transform: uppercase;
  color: ${theme.color.gray1};
`;

export const Box = styled.View`
  padding: 12px;
  height: 79px;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  padding-top: 14px;
`;

export const CharacterDetailScreen = () => {
  const route = useRoute<any>()
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.color.white}
      />
      <Layout>
        <Section>
          <BackgroundImage source={BG} blurRadius={2} />
          <Content>
            <CharacterPic source={{ uri: route.params.image }} />
            <Box>
              <Status>{route.params.status}</Status>
              <Name>{route.params.name}</Name>
              <Species>{route.params.species}</Species>
            </Box>
          </Content>
        </Section>
      </Layout>
    </>
  );
};
