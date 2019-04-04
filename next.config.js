const {
  NODE_ENV = 'development',
  SLS_STAGE = '',
  REGION,
  COGNITO_USER_POOL_ID,
  COGNITO_APP_CLIENT_ID,
  COGNITO_IDENTITY_POOL_ID,
} = process.env;

module.exports = {
  poweredByHeader: false,
  target: 'serverless',
  crossOrigin: 'anonymous',
  onDemandEntries: {
    // Make sure entries are not getting disposed.
    maxInactiveAge: 1000 * 60 * 60,
  },
  env: {
    NAMESPACE: SLS_STAGE,
    REGION,
    COGNITO_USER_POOL_ID,
    COGNITO_APP_CLIENT_ID,
    COGNITO_IDENTITY_POOL_ID,
  },
};
