import React from 'react';
import { Text, View } from 'react-native';
import Padding from 'components/padding';
import { COLORS } from 'core/presentation/styles/colors';

function Section({ title, children }) {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Padding paddingHorizontal={22} paddingVertical={12} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: COLORS.primaryText, fontSize: 15.5 }}>{title}</Text>
                    <Text style={{ color: COLORS.primaryText, fontSize: 13 }}>See all</Text>
                </View>
            </Padding>
            {children}
        </View>
    );
}

export default Section;