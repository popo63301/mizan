import React from 'react';
import { View, Text } from 'react-native';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import TotalPageListItem from '../containers/TotalPageListItem';

const TotalPageList = ({ rewardsList }) => (
  <View>
    {/* <Text
      style={{
        color: 'black',
        marginTop: 35,
        marginBottom: 46,
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Capriola-Regular',
      }}
    >
      <FormattedMessage id="totalPage.title" />
    </Text> */}
    <View style={{ marginTop: 22 }}>
      {rewardsList.map(elem => <TotalPageListItem rewardId={elem} />)}
    </View>
  </View>
);

TotalPageList.propTypes = {
  rewardsList: PropTypes.array.isRequired, //eslint-disable-line
};

export default TotalPageList;
