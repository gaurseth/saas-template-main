/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '103b7nmfsjtmfvv7cpa2rgupcv',
  USER_POOL_ID: 'us-east-1_XqapojnaF',
  IDENTITY_POOL_ID: 'us-east-1:f1d3fabe-6b51-42ca-9860-7f171504d096',
  GRAPHQL_ENDPOINT: 'https://nfh3xpsrsrbobbvoypxaqhslvy.appsync-api.us-east-1.amazonaws.com/graphql',
};

export default configDevelopment;
