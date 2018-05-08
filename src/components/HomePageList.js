import React from 'react';
import { View } from 'react-native';
import HomePageListItem from './HomePageListItem';

const sampleList = ['je suis', 'qqlq de ', 'très beau'];

const HomePageList = ({ navigation }) => (
  <View>
    {sampleList.map((elem, key) => (
      <HomePageListItem
        text={elem}
        key={key}
        onClick={() => {
          navigation.navigate('NavigationPageTest', { numero: key });
        }}
      />
    ))}
  </View>
);

export default HomePageList;
