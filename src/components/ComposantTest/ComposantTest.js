import React from 'react';
// import { View, Text } from 'react-native';
import styled from 'styled-components';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';

const View = styled.View`
  background-color: red;
  width: 150px;
  ${props => props.styleView};
`;

View.displayName = 'hello';

const Text = styled.Text`
  color: red;
`;

Text.displayName = 'man';

const ComposantTest = ({ name }) => {
  console.log('AdMobInterstitial.simulatorId', AdMobInterstitial);
  // AdMobInterstitial.setTestDevices(['EMULATOR']);
  // AdMobInterstitial.setAdUnitID('ca-app-pub-5477538004615349/4411885551');
  // AdMobInterstitial.requestAd()
  //   .then((st) => {
  //     console.log('st', st);
  //     AdMobInterstitial.showAd();
  //   })
  //   .catch(e => console.log('youpi', e));
  return (
    <View style={{ width: '100%' }}>
      <Text>okayyyyy{name}</Text>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.log('bahhhh', error)}
      />
    </View>
  );
};

export default ComposantTest;
