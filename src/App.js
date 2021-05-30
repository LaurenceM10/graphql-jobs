import React from 'react';
import { Platform, UIManager } from 'react-native';

import { ApolloProvider } from '@apollo/client';

import Navigation from 'navigation';
import client from 'core/apollo/client';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
