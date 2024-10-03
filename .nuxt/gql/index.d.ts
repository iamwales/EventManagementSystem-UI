import { getSdk as defaultGqlSdk } from '#gql/default'
export { RegisterMutationVariables, RegisterMutation, LoginMutationVariables, LoginMutation, FindAllEventsQueryVariables, FindAllEventsQuery, FindEventByUuidQueryVariables, FindEventByUuidQuery } from "#gql/default";
declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'register' | 'login' | 'findAllEvents' | 'findEventByUuid'
  const GqClientOps = {"default":["register","login","findAllEvents","findEventByUuid"]}
  const GqlSdks = {
    default: defaultGqlSdk,
  }
  export const GqlFindAllEvents: (...params: Parameters<GqlSdkFuncs['findAllEvents']>) => ReturnType<GqlSdkFuncs['findAllEvents']>
  export const GqlFindEventByUuid: (...params: Parameters<GqlSdkFuncs['findEventByUuid']>) => ReturnType<GqlSdkFuncs['findEventByUuid']>
  export const GqlLogin: (...params: Parameters<GqlSdkFuncs['login']>) => ReturnType<GqlSdkFuncs['login']>
  export const GqlRegister: (...params: Parameters<GqlSdkFuncs['register']>) => ReturnType<GqlSdkFuncs['register']>
  type GqlSdkFuncs = ReturnType<typeof defaultGqlSdk>
}