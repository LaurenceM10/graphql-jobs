import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import Header from 'screens/homeScreen/header';
import LatestJobs from 'components/latestJobs';
import Section from 'components/shared/section';
import Padding from 'components/shared/padding';
import SizedBox from 'components/shared/sizedBox';
import InputSearch from 'components/shared/inputSearch';
import PopularCompanies from 'components/popularCompanies';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <View style={{ paddingTop: 18 }}>
            <SizedBox height={6} />
            <Padding paddingHorizontal={20} paddingVertical={16}>
              <Header />
            </Padding>
            <SizedBox height={12} />
            <Padding paddingHorizontal={18} paddingVertical={10}>
              <InputSearch onChange={() => {}} />
            </Padding>
            <SizedBox height={12} />
            <Section title="Popular Companies">
              <PopularCompanies />
            </Section>
            <SizedBox height={12} />
            <Section title="Latest Jobs">
              <LatestJobs />
            </Section>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
});

export default HomeScreen;
