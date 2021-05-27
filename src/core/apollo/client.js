import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ENVIRONMENT } from 'core/env/environment';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  uri: ENVIRONMENT.API_URL,
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
