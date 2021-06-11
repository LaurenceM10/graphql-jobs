import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';

import useLottie from 'hooks/useLottie';
import SizedBox from 'components/shared/sizedBox';
import TextGradient from 'components/shared/textGradient';

// Styles
import { POPPINS } from 'core/presentation/styles/fonts';

const source = require('../../../assets/animations/search_animation.json');

function SplashScreen() {
  const { ref } = useLottie();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <TextGradient style={styles.titleSemi}>GraphQL Jobs</TextGradient>
        <SizedBox height={24} />
        <LottieView source={source} ref={ref} style={styles.lottie} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lottie: {
    height: 350,
    marginLeft: 18,
  },
  titleSemi: {
    fontSize: 34,
    letterSpacing: 2.5,
    fontFamily: POPPINS.regular,
  },
});

export default SplashScreen;
