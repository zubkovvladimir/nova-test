import { NoParamEndpointConstructor, SingleParamEndpointConstructor } from 'interfaces/endpoints.interfaces';

interface Endpoints {
  endpoint: NoParamEndpointConstructor;
  endpoint2: SingleParamEndpointConstructor<string>;
}

const baseUrl = '/example' as const;

export const exampleEndpoints: Endpoints = {
  endpoint: () => `${baseUrl}`,
  endpoint2: (param) => `${baseUrl}/${param}`,
};
