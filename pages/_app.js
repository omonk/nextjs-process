import NextApp, { Container } from 'next/app';

const {
  REGION,
  COGNITO_USER_POOL_ID,
  COGNITO_APP_CLIENT_ID,
  COGNITO_IDENTITY_POOL_ID,
} = process.env;

console.log({ process });
export default class App extends NextApp {
  static async getInitialProps(context) {
    console.log('------------------------');
    console.log({ process });
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
