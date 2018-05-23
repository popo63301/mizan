import React, { Component } from 'react';
import en from '../../locale/en';
import fr from '../../locale/fr';

const msg = {
  en,
  fr,
};

const getMessage = locale => msg[locale] || msg.en;

function withMessages(WrappedComponent) {
  return class extends Component {
    render() {
      const { locale } = this.props;
      return <WrappedComponent messages={getMessage(locale)} {...this.props} />;
    }
  };
}

export default withMessages;
