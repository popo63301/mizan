import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemView = styled.View`
  border-width: 2px;
  height: 50px;
  width: 300px;
`;

const ItemLabel = styled.Text`
  font-size: 25px;
  text-align: center;
`;

const HomePageListItem = ({ onClick, hadith }) => (
  <TouchableOpacity activeOpacity={1} onPress={onClick}>
    <ItemView>
      <ItemLabel>{hadith.description}</ItemLabel>
    </ItemView>
  </TouchableOpacity>
);

HomePageListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomePageListItem;
