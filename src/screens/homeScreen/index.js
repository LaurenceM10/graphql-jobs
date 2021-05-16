import { POPPINS } from '@core/presentation/styles/fonts';
import { COLORS } from 'core/presentation/styles/colors';

import React from 'react';
import {
    SafeAreaView, View, Text, TextInput
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

console.log({ Colors })

const Header = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 23, color: COLORS.primaryText }}>Find Your Dream Job</Text>
        <View style={{ width: 48, height: 48, backgroundColor: Colors.lighter, borderRadius: 12 }}>

        </View>
    </View>
);

const Padding = ({ paddingHorizontal, paddingVertical = 0, children }) => (
    <View style={{ paddingHorizontal, paddingVertical }}>
        { children}
    </View>
);

const Section = ({ title }) => (
    <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>{title}</Text>
            <Text>Placeholder</Text>
        </View>
    </View>
)

const InputSearch = () => (
    <View style={{ backgroundColor: Colors.lighter, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12 }}>
        <TextInput placeholder="Search a job" />
    </View>
)

function HomeScreen() {
    return (
        <SafeAreaView style={{ backgroundColor: Colors.lighter, flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#FFF', paddingTop: 18 }}>
                <Padding paddingHorizontal={22} paddingVertical={10} >
                    <Header />
                </Padding>

                <Padding paddingHorizontal={22} paddingVertical={10} >
                    <InputSearch />
                </Padding>

                <Padding paddingHorizontal={22} paddingVertical={10} >
                    <Section title="Popular companies">

                    </Section>
                </Padding>

            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;