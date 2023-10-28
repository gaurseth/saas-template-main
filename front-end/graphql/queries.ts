/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../../../../../../../graphql/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCognitoUser = /* GraphQL */ `query GetCognitoUser {
  getCognitoUser {
    id
    username
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCognitoUserQueryVariables,
  APITypes.GetCognitoUserQuery
>;
