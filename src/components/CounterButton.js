import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgba(57, 204, 204, 0.2);
`;

const ButtonContainer = styled.View`
  height: 200px;
  width: 200px;
  background-color: #72c699;
  border-radius: 100;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 72px;
  font-family: Capriola-Regular;
`;

const CounterButton = ({ increaseCounter, hadithId }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={() => increaseCounter(hadithId)}>
    <Container>
      <ButtonContainer>
        <ButtonText>+1</ButtonText>
      </ButtonContainer>
    </Container>
  </TouchableOpacity>
);

CounterButton.propTypes = {
  increaseCounter: PropTypes.func.isRequired,
  hadithId: PropTypes.string.isRequired,
};

export default CounterButton;
