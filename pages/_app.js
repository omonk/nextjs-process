import NextApp, { Container } from 'next/app';
import React from 'react';

const {
  REGION,
  COGNITO_USER_POOL_ID,
  COGNITO_APP_CLIENT_ID,
  COGNITO_IDENTITY_POOL_ID,
} = process.env;

// Want to configure amplify here to  use globally
// Amplify.configure({
//   Auth: {
//     mandatorySignIn: true,
//     region: REGION,
//     userPoolId: COGNITO_USER_POOL_ID,
//     identityPoolId: COGNITO_IDENTITY_POOL_ID,
//     userPoolWebClientId: COGNITO_APP_CLIENT_ID,
//   },
// });

export default class App extends NextApp {
  static async getInitialProps(context) {
    // console.log('------------------------');
    // console.log({ process });
    return {};
  }

  render() {
    const { Component, pageProps, ...props } = this.props;

    return (
      <Container {...props}>
        <Component {...pageProps} />
      </Container>
    );
  }
}
