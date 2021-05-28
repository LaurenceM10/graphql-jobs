import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import Padding from 'components/shared/padding';
import SizedBox from 'components/shared/sizedBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputSearch from 'components/shared/inputSearch';
import JobList, { JobListLoading } from 'components/jobList';
import { SharedElement } from 'react-navigation-shared-element';

import { useJobSearch } from 'repositories/jobs';
import { useDebouncedCallback } from 'use-debounce';
import { colors } from '../../core/presentation/styles/theme';
import { POPPINS } from '../../core/presentation/styles/fonts';

function SearchScreen() {
  const {
    operations: { setSearchTerm },
    state: { jobs, loading, error },
  } = useJobSearch();

  const onChangeSearch = useDebouncedCallback(value => {
    setSearchTerm(value);
  }, 500);

  const SearchContent = () => {
    if (loading) {
      return <JobListLoading />;
    }

    if (jobs.length) {
      return <JobList jobs={jobs} />;
    }

    return (
      <View
        style={{
          height: 300,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon size={56} name="search" />
        <SizedBox height={24} />
        <Text
          style={{
            fontSize: 16,
            fontFamily: POPPINS.light,
            color: colors.primaryText,
          }}>
          Search for your new job
        </Text>
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
