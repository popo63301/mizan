import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HadithContainer = styled.View`
  margin-left: 10%;
  margin-right: 10%;
`;
const ModalButton = styled.Text`
  font-size: 30px;
`;

const ModalContentView = styled.View`
  height: 70%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const QuitButtonView = styled.View`
  border-radius: 4;
  background-color: #001f3f;
`;

const QuitButtonText = styled.Text`
  padding: 20px;
  color: #7fdbff;
`;
class CounterModalInfo extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    const {
      hadith: { hadith },
    } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.toggleModal}>
          <ModalButton>ℹ️</ModalButton>
        </TouchableOpacity>
        <Modal
          visible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}
          onBackButtonPress={this.toggleModal}
        >
          <ModalContentView>
            <HadithContainer>
              <Text>
                <FormattedMessage id={hadith} />
              </Text>
            </HadithContainer>
            <TouchableOpacity onPress={this.toggleModal}>
              <QuitButtonView>
                <QuitButtonText>D'accord!</QuitButtonText>
              </QuitButtonView>
            </TouchableOpacity>
          </ModalContentView>
        </Modal>
      </View>
    );
  }
}

CounterModalInfo.propTypes = {
  hadith: PropTypes.object.isRequired, //eslint-disable-line
};
export default CounterModalInfo;
