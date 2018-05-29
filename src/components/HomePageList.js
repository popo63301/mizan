import React from 'react';
import { View } from 'react-native';
import HomePageListItem from '../containers/HomePageListItem';

const HomePageList = ({ push, listHadithsIds }) => (
  <View style={{ backgroundColor: 'rgba(57, 204, 204, 0.1)' }}>
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
