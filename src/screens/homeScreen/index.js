import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import Header from 'screens/homeScreen/header';
import LatestJobs from 'components/latestJobs';
import Section from 'components/shared/section';
import Padding from 'components/shared/padding';
import SizedBox from 'components/shared/sizedBox';
import InputSearch from 'components/shared/inputSearch';
import PopularCompanies from 'components/popularCompanies';
import { SharedElement } from 'react-navigation-shared-element';

function HomeScreen({ navigation }) {
  const goToSearchScreen = () => navigation.navigate('Search');

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <SizedBox height={24} />
          <Padding paddingHorizontal={20} paddingVertical={16}>
            <Header />
          </Padding>
          <SizedBox height={12} />
          <Padding paddingHorizontal={18} paddingVertical={10}>
            <TouchableWithoutFeedback onPress={goToSearchScreen}>
              <SharedElement id="search">
                <View pointerEvents="none">
                  <InputSearch />
                </View>
              </SharedElement>
            </TouchableWithoutFeedback>
          </Padding>
          <SizedBox height={12} />
          <Section title="Latest Jobs">
            <LatestJobs />
          </Section>
          <SizedBox height={12} />
          <Section title="Popular Companies">
            <PopularCompanies />
          </Section>
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
