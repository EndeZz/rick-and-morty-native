import React, { FC, useCallback, useState } from 'react';
import { CheckBox, Modal } from 'src/ui';
import { InputItem } from '../InputItem';
import {
  SearchItemWrapper,
  SearchFilterCaption,
  SearchFilterInfo,
  SearchFilterTitle,
  InputContainer,
} from './styled';

interface SearchItemProps {
  title: string;
  caption: string;
}

export const SearchItem: FC<SearchItemProps> = ({ title, caption }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');

  const handleToggleModal = useCallback(() => {
    setModalVisible(prev => !prev);
  }, [isModalVisible]);

  return (
    <>
      <SearchItemWrapper onPress={handleToggleModal}>
        <CheckBox />

        <SearchFilterInfo>
          <SearchFilterTitle>{title}</SearchFilterTitle>
          <SearchFilterCaption>{caption}</SearchFilterCaption>
        </SearchFilterInfo>
      </SearchItemWrapper>

      <Modal
        title={title}
        isVisible={isModalVisible}
        onPress={handleToggleModal}>
        <InputContainer>
          <InputItem
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="Search"
          />
        </InputContainer>
      </Modal>
    </>
  );
};
