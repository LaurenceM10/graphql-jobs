import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import Markdown from 'components/markdown';
import Padding from 'components/shared/padding';
import Header from 'screens/jobDetailScreen/header';
import Footer from 'screens/jobDetailScreen/footer';

import { useJobDetail } from 'repositories/jobs';

function JobDetailScreen({ route }) {
  const { job } = route.params;
  const { id, title, slug, company, commitment, locationNames } = job;
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            id={id}
            title={title}
            location={locationNames}
            logoUrl={company.logoUrl}
            commitment={commitment.title}
          />
          <View style={styles.content}>
            <Padding paddingVertical={18} paddingHorizontal={32}>
              {renderContent()}
            </Padding>
          </View>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
  content: {
    flex: 0,
    backgroundColor: '#fff',
    borderTopEndRadius: 45,
    borderTopStartRadius: 45,
  },
});

export default JobDetailScreen;
