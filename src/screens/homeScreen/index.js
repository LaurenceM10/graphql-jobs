
import React from 'react';
import {
    SafeAreaView, View, ScrollView, KeyboardAvoidingView
} from 'react-native';

import PopularCompanies from 'components/popularCompanies';
import Padding from 'components/padding';
import SizedBox from 'components/sizedBox';
import Header from 'screens/homeScreen/header';
import InputSearch from 'components/inputSearch';
import Section from 'components/section';

function HomeScreen() {
    return (
        <SafeAreaView style={{ backgroundColor: '#FAFAFA', flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FFF' }} behavior="height">
                <ScrollView>
                    <View style={{ paddingTop: 18 }}>
                        <Padding paddingHorizontal={22} paddingVertical={10} >
                            <Header />
                        </Padding>
                        <SizedBox height={12} />
                        <Padding paddingHorizontal={22} paddingVertical={10} >
                            <InputSearch />
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

export default HomeScreen;