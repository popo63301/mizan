import React from 'react';
import { View } from 'react-native';
import HomePageListItem from '../containers/HomePageListItem';

const HomePageList = ({ push, listHadithsIds }) => (
  <View style={{ backgroundColor: 'white' }}>
    <View>
      {listHadithsIds.map((elem, key) => (
        <HomePageListItem
          hadithId={elem}
          key={key}
          onClick={() => {
            push('/CounterPage', { hadithId: elem });
          }}
        />
      ))}
    </View>
  </View>
);

export default HomePageList;
