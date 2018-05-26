import React, { Component } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import LeftArrow from '../../assets/svg/LeftArrow';

const NavigationBarContainer = styled.View`
  height: 64px;
  background-color: #72c699;
`;
class NavigationBar extends Component {
  leftIconFunction = () => {
    const { navigate, goBack } = this.props.navigation;
    if (this.props.isBack) {
      goBack();
    } else {
      navigate('OptionPage');
    }
  };
  renderLeftIcon = () => {
    if (this.props.isBack) {
      return <LeftArrow />;
    }
    return <Text>hmoll</Text>;
  };
  render() {
    return (
      <NavigationBarContainer>
        <TouchableOpacity activeOpacity={0.5} onPress={this.leftIconFunction}>
          <View style={{ marginLeft: 20, marginTop: 23 }}>{this.renderLeftIcon()}</View>
        </TouchableOpacity>
      </NavigationBarContainer>
    );
  }
}
export default NavigationBar;
