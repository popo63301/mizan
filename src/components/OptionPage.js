import React from 'react';
import { View, Button, Text } from 'react-native';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import AdBanner from './AdBanner';
import NavigationBar from './NavigationBar';

const OptionPage = ({ locale, navigation, toggleLanguage }) => (
  <View style={{ backgroundColor: 'white', display: 'flex', flex: 1 }}>
    <NavigationBar navigation={navigation} isBack />
    <View>
      <FormattedMessage id="hello" />
      <FormattedMessage id="beautiful" />

      <Text>{locale}</Text>
      <Button
        onPress={() => toggleLanguage()}
        title="Change language"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    <AdBanner />
  </View>
);

OptionPage.propTypes = {
  locale: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired, //eslint-disable-line
  toggleLanguage: PropTypes.func.isRequired,
};
export default OptionPage;
