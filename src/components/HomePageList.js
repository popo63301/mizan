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
          navigation.navigate('CounterPage', { hadithId: elem });
        }}
      />
    ))}
  </View>
);

export default HomePageList;
