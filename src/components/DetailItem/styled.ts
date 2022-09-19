import { theme } from 'src/styles';
import styled, { css } from 'styled-components/native';

const TagWrapper = css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;
`;

export const DetailTouchableWrapper = styled.TouchableOpacity`
  ${TagWrapper}
`;

export const DetailViewWrapper = styled.View`
  ${TagWrapper}
`;

export const DetailInner = styled.View`
  padding-top: 9px;
  padding-bottom: 10px;
`;

export const DetailTitle = styled.Text`
  font-family: ${theme.typography.black};
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${theme.color.black};
`;

export const DetailCaption = styled.Text`
  font-family: ${theme.typography.regular};
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${theme.color.additional_text};
`;

export const ArrowInner = styled.View`
  margin-right: 16px;
`;
