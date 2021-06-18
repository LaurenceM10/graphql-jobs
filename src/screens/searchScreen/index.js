import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  LayoutAnimation,
  KeyboardAvoidingView,
} from 'react-native';

import Padding from 'components/shared/padding';
import SizedBox from 'components/shared/sizedBox';
import InputSearch from 'components/shared/inputSearch';
import SearchView from 'screens/searchScreen/searchView';
import JobList, { JobListLoading } from 'components/jobList';
import { SharedElement } from 'react-navigation-shared-element';

import { useJobsSearch } from 'logic/jobs';
import { useDebouncedCallback } from 'use-debounce';

function SearchScreen() {
  const {
    operations: { setSearchTerm },
    state: { jobs, loading, searchTerm },
  } = useJobsSearch();

  const onChangeSearch = useDebouncedCallback(value => {
    setSearchTerm(value);
  }, 500);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  }, [loading, jobs]);

  const SearchContent = () => {
    if (!searchTerm) {
      return <SearchView />;
    }

    if (loading) {
      return <JobListLoading />;
    }

    return <JobList jobs={jobs} />;
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
        <View style={{ flex: 1 }}>
          <Padding paddingHorizontal={18} paddingVertical={0}>
            <SearchContent />
          </Padding>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
});

export default SearchScreen;
