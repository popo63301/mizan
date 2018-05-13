import React from 'react';
import { View, Button } from 'react-native';
import { injectIntl, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { toggleLanguage } from './redux/action';

const Comp = injectIntl(props => (
  <View>
    <FormattedMessage id="hello" />
    <FormattedMessage id="beautiful" />

    <Button
      onPress={() => props.toggleLanguage()}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
));

const mapDispatchToProps = {
  toggleLanguage,
};

export default connect(null, mapDispatchToProps)(Comp);
