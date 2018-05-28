import React from 'react';
import { View, Text } from 'react-native';
import House from '../../../assets/svg/House';
import RewardImage from '../RewardImage';

const ComposantTest = () => (
  <View style={{ width: '100%' }}>
    <Text>okayyyyy</Text>
    <RewardImage idReward="quran" height={81} width={81} />
  </View>
);

export default ComposantTest;
