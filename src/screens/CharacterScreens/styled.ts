import { ScrollView } from 'react-native';
import { LineWrapper } from 'src/ui/Line/styled';
import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const Section = styled.View`
  width: 100%;
  height: 100%;
  max-height: 254px;
  background-color: ${theme.color.gray6};
`;

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${theme.color.white};
`;

export const BackgroundImage = styled.Image`
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
  background-color: ${theme.color.white};
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
  padding: 20px 0;
  height: 79px;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  padding-top: 14px;
`;

export const List = styled.FlatList`
  padding-top: 10px;
  padding-left: 9px;
  padding-right: 23px;
  flex: 1;
`;

export const DetailWrapper = styled.View`
  flex: 1;
`;

export const DetailTitle = styled.Text`
  font-family: ${theme.typography.bold};
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.38px;
  padding: 20px 16px 10px 16px;
  color: ${theme.color.gray1};
`;

export const DetailContent = styled.View`
  margin-bottom: 40px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${theme.color.gray4};
`;

export const DetailLine = styled(LineWrapper)`
  margin-left: 16px;
`;
