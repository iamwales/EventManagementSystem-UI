import type { GraphQLClient, RequestOptions } from 'graphql-request';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  Url: { input: any; output: any; }
};

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  NON_BINARY = 'NON_BINARY'
}

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
}>;


export type RegisterMutation = { register: { token?: string | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { login: { token?: string | null } };

export type FindAllEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllEventsQuery = { events?: Array<{ uuid: string, name: string } | null> | null };

export type FindEventByUuidQueryVariables = Exact<{
  uuid: Scalars['ID']['input'];
}>;


export type FindEventByUuidQuery = { event?: { uuid: string, name: string } | null };

export type CreateEventStartMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateEventStartMutation = { createEventStart?: { uuid: string, name: string } | null };


export const RegisterDocument = gql`
    mutation register($email: String!, $password: String!, $firstname: String!, $lastname: String!) {
  register(
    username: $email
    password: $password
    firstname: $firstname
    lastname: $lastname
  ) {
    token
  }
}
    `;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(username: $email, password: $password) {
    token
  }
}
    `;
export const FindAllEventsDocument = gql`
    query findAllEvents {
  events {
    uuid
    name
  }
}
    `;
export const FindEventByUuidDocument = gql`
    query findEventByUuid($uuid: ID!) {
  event(uuid: $uuid) {
    uuid
    name
  }
}
    `;
export const CreateEventStartDocument = gql`
    mutation createEventStart($name: String!) {
  createEventStart(name: $name) {
    uuid
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    register(variables: RegisterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutation>(RegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'register', 'mutation', variables);
    },
    login(variables: LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login', 'mutation', variables);
    },
    findAllEvents(variables?: FindAllEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindAllEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllEventsQuery>(FindAllEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllEvents', 'query', variables);
    },
    findEventByUuid(variables: FindEventByUuidQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindEventByUuidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindEventByUuidQuery>(FindEventByUuidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findEventByUuid', 'query', variables);
    },
    createEventStart(variables: CreateEventStartMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateEventStartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateEventStartMutation>(CreateEventStartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createEventStart', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;