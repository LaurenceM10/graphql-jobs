import { COLORS } from 'core/presentation/styles/colors';
import React from 'react';
import { View, Text } from 'react-native';

function Header() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{
                fontSize: 24,
                color: COLORS.primaryColor,
                fontWeight: '300'
            }}>Find Your Dream Job</Text>
            <View style={{ width: 48, height: 48, backgroundColor: '#EEE', borderRadius: 14 }} />
        </View>
    )
}

export default Header;