import React from 'react';
import { Platform, UIManager } from 'react-native';
import ErrorBoundary from 'components/errorBoundary';

import { ApolloProvider } from '@apollo/client';
import AuthProvider from 'providers/authProvider';

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
      <AuthProvider>
        <ErrorBoundary>
          <Navigation />
        </ErrorBoundary>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
