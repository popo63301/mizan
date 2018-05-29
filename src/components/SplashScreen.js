import React from 'react';
import { Text, View } from 'react-native';

const SplashScreen = () => (
  <View
    style={{
      display: 'flex',
      flex: 1,
      backgroundColor: '#72C699',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'white', fontSize: 45, fontFamily: 'Capriola-Regular' }}>Mizan</Text>
  </View>
);

export default SplashScreen;
