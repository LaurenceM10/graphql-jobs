import React, { useState } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import Padding from 'components/shared/padding';
import SizedBox from 'components/shared/sizedBox';
import InputSearch from 'components/shared/inputSearch';
import { SharedElement } from 'react-navigation-shared-element';
import { useJobSearch } from 'repositories/jobs';
import JobCard from '../../components/jobCard';

function SearchScreen() {
  const {
    operations: { setSearchTerm },
    state: { jobs, loading, error },
  } = useJobSearch();

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <SizedBox height={18} />
          <Padding paddingHorizontal={18} paddingVertical={10}>
            <SharedElement id="search">
              <InputSearch autoFocus onChange={setSearchTerm} />
            </SharedElement>
          </Padding>
          <Padding paddingHorizontal={18} paddingVertical={10}>
            {jobs.map(i => (
              <JobCard job={i} key={i.id} />
            ))}
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

export default SearchScreen;
