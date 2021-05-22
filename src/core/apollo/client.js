import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ENVIRONMENT } from 'core/env/environment';

const client = new ApolloClient({
  uri: ENVIRONMENT.API_URL,
  cache: new InMemoryCache(),
});

export default client;
