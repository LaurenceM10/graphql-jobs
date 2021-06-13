import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  LayoutAnimation,
} from 'react-native';

import Markdown from 'components/markdown';
import Padding from 'components/shared/padding';
import TopBar from 'screens/jobDetailScreen/topBar';
import JobHeader from 'screens/jobDetailScreen/jobHeader';
import JobActions from 'screens/jobDetailScreen/jobActions';

import { useApplyToJob, useJobDetail, useSaveJob } from 'logic/jobs';

function JobDetailScreen({ route }) {
  const { job } = route.params;
  const { id, title, slug, company, commitment, locationNames } = job;
  const {
    state: { detail },
  } = useJobDetail({
    jobSlug: slug,
    companySlug: company?.slug,
  });
  const [apply] = useApplyToJob(detail?.applyUrl);
  const [save] = useSaveJob(job);

  const renderContent = () => {
    if (detail) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

      return <Markdown>{detail?.description}</Markdown>;
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TopBar onSave={save} />
        <JobHeader
          id={id}
          title={title}
          location={locationNames}
          logoUrl={company?.logoUrl}
          commitment={commitment.title}
        />
        <View style={styles.content}>
          <Padding paddingVertical={18} paddingHorizontal={32}>
            {renderContent()}
          </Padding>
        </View>
      </ScrollView>
      <JobActions onApply={apply} />
    </SafeAreaView>
  );
}

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
  content: {
    minHeight: screenHeight - 250,
    backgroundColor: '#fff',
    borderTopEndRadius: 45,
    borderTopStartRadius: 45,
  },
});

export default JobDetailScreen;
