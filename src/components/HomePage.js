import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components';
import HomePageList from '../containers/HomePageList';

// const Page = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

const HomePage = ({ navigation }) => (
  <ScrollView>
    <HomePageList navigation={navigation} />
  </ScrollView>
);

export default HomePage;
