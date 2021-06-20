import { API_URL } from '@env';

export const ENVIRONMENT = {
  // TODO: verify why env variable is not loading in Windows
  API_URL: API_URL ?? 'https://api.graphql.jobs/',
};
