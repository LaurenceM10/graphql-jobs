import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import PopularCompanies from 'components/popularCompanies';
import Padding from 'components/padding';
import SizedBox from 'components/sizedBox';
import Header from 'screens/homeScreen/header';
import InputSearch from 'components/inputSearch';
import Section from 'components/section';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <View style={{ paddingTop: 18 }}>
            <Padding paddingHorizontal={20} paddingVertical={16}>
              <Header />
            </Padding>
            <SizedBox height={12} />
            <Padding paddingHorizontal={20} paddingVertical={10}>
              <InputSearch onChange={() => {}} />
            </Padding>
            <SizedBox height={22} />
            <Section title="Popular Companies">
              <PopularCompanies />
            </Section>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#FFF' },
});

export default HomeScreen;
