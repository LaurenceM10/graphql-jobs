import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from 'screens/homeScreen';
import SearchScreen from 'screens/searchScreen';
import SplashScreen from 'screens/splashScreen';
import JobDetailScreen from 'screens/jobDetailScreen';

// Hooks
import { useAuth } from 'providers/authProvider/authProvider';

const Stack = createSharedElementStackNavigator();

const transitionOptions = {
  transitionSpec: {
    open: { animation: 'timing', config: { duration: 500 } },
    close: { animation: 'timing', config: { duration: 400 } },
  },
};

export default function Navigation() {
  const { state } = useAuth();

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="JobDetail"
          component={JobDetailScreen}
          options={{
            headerShown: false,
            ...transitionOptions,
          }}
          sharedElementsConfig={route => {
            const {
              job: { id, company, title },
            } = route.params;

            return [
              { id: `${id}${company?.logoUrl}`, animation: 'move' },
              { id: `${id}${title}`, animation: 'fade' },
            ];
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            ...transitionOptions,
          }}
          sharedElementsConfig={(_, otherRoute) => {
            if (otherRoute.name === 'Home') {
              return [{ id: 'search', animation: 'fade' }];
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
