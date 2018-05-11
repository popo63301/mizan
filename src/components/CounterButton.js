import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgba(57, 204, 204, 0.3);
`;

const ButtonContainer = styled.View`
  height: 200px;
  width: 200px;
  background-color: #bbb;
  border-radius: 100;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 45px;
  font-weight: bold;
`;

const CounterButton = () => (
  <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('bravo')}>
    <Container>
      <ButtonContainer>
        <ButtonText>+1</ButtonText>
      </ButtonContainer>
    </Container>
  </TouchableOpacity>
);

export default CounterButton;
