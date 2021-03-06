module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native' +
      '|react-native-vector-icons' +
      '|react-native-reanimated' +
      '|react-navigation-shared-element' +
      '|react-native-snap-carousel' +
      '|react-native-material-ripple' +
      ')/)',
  ],
};
