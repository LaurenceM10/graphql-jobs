import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import JobCard from '../../components/jobCard';
import Padding from 'components/shared/padding';
import SizedBox from 'components/shared/sizedBox';
import JobList, { JobListLoading } from 'components/jobList';
import InputSearch from 'components/shared/inputSearch';
import { SharedElement } from 'react-navigation-shared-element';

import { useJobSearch } from 'repositories/jobs';
import { useDebouncedCallback } from 'use-debounce';

function SearchScreen() {
  const {
    operations: { setSearchTerm },
    state: { jobs, loading, error },
  } = useJobSearch();

  const onChangeSearch = useDebouncedCallback(value => {
    setSearchTerm(value);
  }, 250);

  const SearchContent = () => {
    if (loading) {
      return <JobListLoading />;
    }

    if (jobs.length) {
      return <JobList jobs={jobs} />;
    }

    return (
      <View style={{ flex: 1 }}>
        <Text>Search for your new job</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <SizedBox height={18} />
        <Padding paddingHorizontal={18} paddingVertical={10}>
          <SharedElement id="search">
            <InputSearch autoFocus onChange={onChangeSearch} />
          </SharedElement>
        </Padding>
        <Padding paddingHorizontal={18} paddingVertical={10}>
          <SearchContent />
        </Padding>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
});

export default SearchScreen;
