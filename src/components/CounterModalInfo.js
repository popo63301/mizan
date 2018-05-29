import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../assets/svg/Icon';

const HadithContainer = styled.View`
  margin-left: 10%;
  margin-right: 10%;
`;

const ModalContentView = styled.View`
  height: 70%;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
`;
const QuitButtonView = styled.View`
  border-radius: 4;
  background-color: #72c699;
`;

const QuitButtonText = styled.Text`
  padding: 20px;
  color: white;
  font-size: 13px;
  font-family: Capriola-Regular;
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
          <View style={{ marginTop: 13, marginRight: 15 }}>
            <Icon />
          </View>
        </TouchableOpacity>
        <Modal
          backdropColor="black"
          backdropOpacity={0.7}
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}
          onBackButtonPress={this.toggleModal}
        >
          <ModalContentView>
            <HadithContainer>
              <Text
                style={{
                  fontFamily: 'Capriola-Regular',
                  fontSize: 13,
                  color: 'black',
                  marginBottom: 35,
                }}
              >
                <FormattedMessage id={hadith} />
              </Text>
            </HadithContainer>
            <TouchableOpacity onPress={this.toggleModal}>
              <QuitButtonView>
                <QuitButtonText>
                  <FormattedMessage id="counterPage.modal.okButton" />
                </QuitButtonText>
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
