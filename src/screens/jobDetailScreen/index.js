import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import Header from 'screens/jobDetailScreen/header';
import Markdown from 'react-native-markdown-display';

import { useJobDetail } from 'repositories/jobs';
import Padding from '../../components/shared/padding';

function JobDetailScreen({ route }) {
  const { job } = route.params;
  const { title, slug, company, commitment, locationNames } = job;
  const {
    state: { detail },
  } = useJobDetail({
    jobSlug: slug,
    companySlug: company.slug,
  });

  const renderContent = () => {
    if (detail) {
      return <Markdown>{detail?.description}</Markdown>;
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <Header
            title={title}
            commitment={commitment.title}
            location={locationNames}
            logoUrl={company.logoUrl}
          />
          <Padding paddingVertical={6} paddingHorizontal={18}>
            {renderContent()}
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
