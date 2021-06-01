import React from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';

function SplashScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
});

export default SplashScreen;
