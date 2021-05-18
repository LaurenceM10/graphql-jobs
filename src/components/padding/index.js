import React from 'react';
import {
    View,
} from 'react-native';


function Padding({ paddingHorizontal, paddingVertical = 0, children }) {
    return (
        <View style={{ paddingHorizontal, paddingVertical }}>
            { children}
        </View>
    )
};

export default Padding;