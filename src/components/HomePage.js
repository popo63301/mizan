import React, { Component } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';
import AdBanner from './AdBanner';
import HomePageList from '../containers/HomePageList';

const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ListContainer = styled.ScrollView`
  flex: 6;
`;

class HomePage extends Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    headerLeft: <Button onPress={() => navigate('OptionPage')} title="Options" color="red" />,
    headerRight: <Button onPress={() => navigate('TotalPage')} title="TotalPage" color="blue" />,
  });

  render() {
    const { navigation } = this.props;

    return (
      <PageContainer>
        <ListContainer>
          <HomePageList navigation={navigation} />
        </ListContainer>
        <AdBanner />
      </PageContainer>
    );
  }
}

export default HomePage;
