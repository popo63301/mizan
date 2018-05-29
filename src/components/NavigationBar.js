import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import LeftArrow from '../../assets/svg/LeftArrow';
import Badge from '../../assets/svg/Badge';
import World from '../../assets/svg/World';

const NavigationBarContainer = styled.View`
  height: 64px;
  background-color: #72c699;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
class NavigationBar extends Component {
  leftIconFunction = () => {
    const { push, goBack } = this.props.navigation;
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

  renderRightIcon = () => {
    const { push } = this.props.navigation;
    if (!this.props.isBack) {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => push('TotalPage')}>
          <View style={{ marginRight: 15, marginTop: 12 }}>
            <Badge />
          </View>
        </TouchableOpacity>
      );
    }
  };

  renderTitle = () => {
    if (!this.props.isBack) {
      return (
        <Text
          style={{
            fontFamily: 'Capriola-Regular',
            fontSize: 24,
            color: 'white',
            marginTop: 20,
          }}
        >
          Mizan
        </Text>
      );
    }
  };
  render() {
    return (
      <NavigationBarContainer>
        <TouchableOpacity activeOpacity={0.5} onPress={this.leftIconFunction}>
          {this.renderLeftIcon()}
        </TouchableOpacity>
        {this.renderTitle()}
        {this.renderRightIcon()}
      </NavigationBarContainer>
    );
  }
}
export default NavigationBar;
