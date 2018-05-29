import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RewardImage from './RewardImage';

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  background: rgba(57, 204, 204, 0.1);
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
  font-size: 18px;
  padding-bottom: 10px;
  font-family: Capriola-Regular;
  color: black;
`;

const ItemDescription = styled.Text`
  flex: 2;
  color: #9b9b9b;
  font-size: 16px;
  font-family: Capriola-Regular;
`;

const ValidationRateText = styled.Text`
  font-weight: bold;
  color: #9b9b9b;
  font-size: 16px;
  font-family: Capriola-Regular;
`;
const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HomePageListItem = ({ onClick, hadith }) => (
  <TouchableOpacity activeOpacity={1} onPress={onClick}>
    <ItemContainer>
      <ImageContainer>
        <RewardImage idReward={hadith.mainRewardId} height={81} width={81} />
      </ImageContainer>
      <TextContainer>
        <ItemTitle>
          <FormattedMessage id={hadith.title} />
        </ItemTitle>
        <ItemDescription>
          <FormattedMessage id={hadith.description} />.
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
