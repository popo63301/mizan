import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  border-width: 2px;
`;

const TextContainer = styled.View`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 6px;
`;

const ItemTitle = styled.Text`
  flex: 1;
  font-size: 22px;
  padding-bottom: 10px;
`;

const ItemDescription = styled.Text`
  flex: 2;
`;

const ValidationRateText = styled.Text`
  font-weight: bold;
`;
const ImageContainer = styled.View`
  flex: 1;
`;

const HomePageListItem = ({ onClick, hadith }) => (
  <TouchableOpacity activeOpacity={1} onPress={onClick}>
    <ItemContainer>
      <ImageContainer />
      <TextContainer>
        <ItemTitle>{hadith.title}</ItemTitle>
        <ItemDescription>
          {hadith.description}.
          <ValidationRateText>({hadith.validationRate}x)</ValidationRateText>
        </ItemDescription>
      </TextContainer>
    </ItemContainer>
  </TouchableOpacity>
);

HomePageListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  hadith: PropTypes.object.isRequired, // eslint-disable-line
};

export default HomePageListItem;
