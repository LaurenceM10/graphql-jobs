import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import Padding from 'components/shared/padding';
import Section from 'components/shared/section';
import Header from 'screens/jobDetailScreen/header';

function JobDetailScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <Header />
          <Padding paddingHorizontal={16} paddingVertical={10}>
            <Section title="Overview" />
          </Padding>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
});

export default JobDetailScreen;
