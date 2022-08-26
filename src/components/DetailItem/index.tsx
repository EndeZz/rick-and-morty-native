import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';
import { Text } from 'react-native';
import { ArrowIcon } from 'src/ui';
import {
  ArrowInner,
  DetailCaption,
  DetailInner,
  DetailTitle,
  DetailTouchableWrapper,
  DetailViewWrapper,
} from './styled';

interface DetailItemProps {
  title?: string;
  subtitle?: string;
  date?: string;
  path?: string;
  isActiveEl?: boolean;
}

export const DetailItem: FC<DetailItemProps> = ({
  title,
  subtitle,
  date,
  path,
  isActiveEl,
}) => {
  const navigation = useNavigation();

  const handlePressOnBlock = useCallback(() => {
    if (isActiveEl) console.log('PRESSED');
  }, []);

  const Tag: React.ElementType = isActiveEl
    ? DetailTouchableWrapper
    : DetailViewWrapper;

  return (
    <Tag onPress={handlePressOnBlock}>
      <DetailInner>
        <DetailTitle>{title}</DetailTitle>
        <DetailCaption>{subtitle}</DetailCaption>
        {date && <Text>{date}</Text>}
      </DetailInner>

      {isActiveEl && (
        <ArrowInner>
          <ArrowIcon />
        </ArrowInner>
      )}
    </Tag>
  );
};
