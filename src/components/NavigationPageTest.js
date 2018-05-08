import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Page = props => (
  <View>
    <Text>page {props.navigation.state.params.numero} </Text>
  </View>
);

export default Page;
