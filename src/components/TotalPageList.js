import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TotalPageListItem from '../containers/TotalPageListItem';

const ListContainer = styled.View`
  padding-top: 70px;
`;

const TotalPageList = ({ rewardsList }) => (
  <ListContainer>{rewardsList.map(elem => <TotalPageListItem rewardId={elem} />)}</ListContainer>
);

TotalPageList.propTypes = {
  rewardsList: PropTypes.array.isRequired, //eslint-disable-line
};

export default TotalPageList;
