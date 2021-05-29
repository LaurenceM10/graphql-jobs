import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from 'screens/homeScreen';
import SearchScreen from 'screens/searchScreen';
import JobDetailScreen from 'screens/jobDetailScreen';

const Stack = createSharedElementStackNavigator();

export default function Navigation() {
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
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 500 } },
              close: { animation: 'timing', config: { duration: 400 } },
            },
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
