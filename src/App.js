import React from 'react';

import {
  ApolloProvider
} from '@apollo/client';

import Navigation from '@navigation'
import client from '@core/apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};


export default App;
