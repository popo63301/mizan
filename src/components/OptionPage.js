import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import AdBanner from './AdBanner';
import NavigationBar from './NavigationBar';

import France from '../../assets/svg/France';
import USA from '../../assets/svg/UnitedStatesOfAmerica';

const languages = [{ elem: France, id: 'fr' }, { elem: USA, id: 'en' }];

const OptionPage = ({ navigation, toggleLanguage }) => (
  <View style={{ backgroundColor: 'white', display: 'flex', flex: 1 }}>
    <NavigationBar navigation={navigation} isBack />
    <View>
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 24,
          fontFamily: 'Capriola-Regular',
          marginTop: 47,
        }}
      >
        <FormattedMessage id="option.selectLanguage" />
      </Text>

      {languages.map(e => (
        <TouchableOpacity activeOpacity={0.5} onPress={() => toggleLanguage(e.id)}>
          <View>{React.createElement(e.elem)}</View>
        </TouchableOpacity>
      ))}

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
  navigation: PropTypes.object.isRequired, //eslint-disable-line
  toggleLanguage: PropTypes.func.isRequired,
};
export default OptionPage;
