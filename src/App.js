import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  ApolloProvider
} from '@apollo/client';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import client from '@core/apollo/client';
import Navigation from '@navigation'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};


export default App;
