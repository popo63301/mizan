import React, { Component } from 'react';

const msg = {
  fr: { hello: 'Salut toi! ', beautiful: 'Je suis beau' },
  en: { hello: 'Hi there! ', beautiful: 'You are beautiful' },
};

const getMessage = (locale) => {
  console.log('msg[locale]', msg[locale]);
  return msg[locale];
};

function withMessages(WrappedComponent) {
  return class extends Component {
    render() {
      const { locale } = this.props;
      console.log('locale', locale);
      return <WrappedComponent messages={getMessage(locale)} {...this.props} />;
    }
  };
}

export default withMessages;
