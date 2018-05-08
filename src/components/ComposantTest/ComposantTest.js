import React from 'react';
// import { View, Text } from 'react-native';
import styled from 'styled-components';

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

const ComposantTest = ({ name, styleView }) => (
  <View styleView={styleView}>
    <Text>okayyyyy{name}</Text>
  </View>
);

export default ComposantTest;
