import React, { Component } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import LeftArrow from '../../assets/svg/LeftArrow';
import Badge from '../../assets/svg/Badge';
import World from '../../assets/svg/World';

const NavigationBarContainer = styled.View`
  height: 64px;
  background-color: #72c699;
  display: flex;
  flex-direction: row;
`;
class NavigationBar extends Component {
  leftIconFunction = () => {
    const { push, goBack } = this.props.history;
    if (this.props.isBack) {
      goBack();
    } else {
      push('OptionPage');
    }
  };
  renderLeftIcon = () => {
    if (this.props.isBack) {
      return (
        <View style={{ marginLeft: 20, marginTop: 23 }}>
          <LeftArrow />
        </View>
      );
    }
    return (
      <View style={{ marginLeft: 17, marginTop: 12 }}>
        <World />
      </View>
    );
  };
  render() {
    return (
      <NavigationBarContainer>
        <TouchableOpacity activeOpacity={0.5} onPress={this.leftIconFunction}>
          {this.renderLeftIcon()}
        </TouchableOpacity>
        {/* <View>
          <Badge />
        </View> */}
      </NavigationBarContainer>
    );
  }
}
export default NavigationBar;
