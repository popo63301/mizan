import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import TotalPageListItem from '../containers/TotalPageListItem';

const TotalPageList = ({ rewardsList }) => (
  <View>
    <View style={{ marginTop: 22 }}>
      {rewardsList.map(elem => <TotalPageListItem rewardId={elem} />)}
    </View>
  </View>
);

TotalPageList.propTypes = {
  rewardsList: PropTypes.array.isRequired, //eslint-disable-line
};

export default TotalPageList;
