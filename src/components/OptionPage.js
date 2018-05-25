import React from 'react';
import { View, Button, Text } from 'react-native';
import { FormattedMessage } from 'react-intl';
import AdBanner from './AdBanner';

const OptionPage = ({ locale, toggleLanguage }) => (
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
    <AdBanner />
  </View>
);

export default OptionPage;
