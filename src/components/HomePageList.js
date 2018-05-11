import React from 'react';
import { View } from 'react-native';
import HomePageListItem from '../containers/HomePageListItem';

const HomePageList = ({ navigation, listHadithsIds }) => (
  <View>
    {listHadithsIds.map((elem, key) => (
      <HomePageListItem
        hadithId={elem}
        key={key}
        onClick={() => {
          navigation.navigate('NavigationPageTest', { numero: key });
        }}
      />
    ))}
  </View>
);

export default HomePageList;
