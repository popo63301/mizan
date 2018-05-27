import React, { Component } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
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

  componentWillMount() {
    console.log('HomePage will mount');
  }
  render() {
    const { navigation, history } = this.props;

    return (
      <PageContainer>
        <NavigationBar history={history} />
        <ListContainer>
          <HomePageList navigation={navigation} push={history.push} />
        </ListContainer>
        <AdBanner />
      </PageContainer>
    );
  }
}

export default HomePage;
