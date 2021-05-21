import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ENVIRONMENT } from 'core/env/environment';

console.log({ X: ENVIRONMENT.API_URL });

const client = new ApolloClient({
  uri: ENVIRONMENT.API_URL,
  cache: new InMemoryCache(),
});

export default client;
