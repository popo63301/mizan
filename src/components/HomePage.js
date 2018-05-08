import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import HomePageList from './HomePageList';

// const Page = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

const HomePage = ({ navigation }) => (
  <View>
    <HomePageList navigation={navigation} />
  </View>
);

export default HomePage;
