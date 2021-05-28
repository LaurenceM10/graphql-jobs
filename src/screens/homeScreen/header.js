import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import TextGradient from 'components/shared/textGradient';

// Styles
import { colors } from 'core/presentation/styles/theme';
import { POPPINS } from 'core/presentation/styles/fonts';

function Header() {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'column', width: '70%' }}>
        <Text style={styles.titleLight}>Find Your</Text>
        <TextGradient style={styles.titleSemi}>Perfect Job</TextGradient>
      </View>
      <View
        style={{
          width: 54,
          height: 54,
          backgroundColor: '#EEE',
          borderRadius: 14,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleLight: {
    fontSize: 28,
    color: colors.primaryText,
    fontFamily: POPPINS.light,
    letterSpacing: 1,
  },
  titleSemi: {
    fontSize: 34,
    letterSpacing: 1.5,
    fontFamily: POPPINS.semibold,
  },
});

export default Header;
