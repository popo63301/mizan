import React from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import AdBanner from './AdBanner';
import NavigationBar from './NavigationBar';

import France from '../../assets/svg/France';
import USA from '../../assets/svg/UnitedStatesOfAmerica';

import Github from '../../assets/svg/Github';

const languages = [{ elem: France, id: 'fr' }, { elem: USA, id: 'en' }];

const OptionPage = ({ navigation, toggleLanguage }) => (
  <View style={{ backgroundColor: 'rgba(57,204,204,0.2)', display: 'flex', flex: 1 }}>
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

      <ScrollView>
        <View
          style={{
            marginTop: 45,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {languages.map(e => (
            <TouchableOpacity activeOpacity={0.5} onPress={() => toggleLanguage(e.id)}>
              <View>{React.createElement(e.elem)}</View>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 80,
          }}
        >
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 19,
              fontFamily: 'Capriola-Regular',
            }}
          >
            Contribute on github:
          </Text>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => Linking.openURL('https://github.com/Mizan-app/translation')}
            >
              <Github />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
    <View style={{ position: 'absolute', bottom: 0 }}>
      <AdBanner />
    </View>
  </View>
);

OptionPage.propTypes = {
  navigation: PropTypes.object.isRequired, //eslint-disable-line
  toggleLanguage: PropTypes.func.isRequired,
};
export default OptionPage;
