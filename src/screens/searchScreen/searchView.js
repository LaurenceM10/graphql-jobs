import React from 'react';
import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';
import SizedBox from 'components/shared/sizedBox';

// styles
import { POPPINS } from 'core/presentation/styles/fonts';
import { colors } from 'core/presentation/styles/theme';
import useLottie from 'hooks/useLottie';

const source = require('../../../assets/animations/search_animation.json');

function SearchView() {
  const { ref } = useLottie();

  return (
    <View style={styles.container}>
      <SizedBox height={50} />
      <LottieView source={source} ref={ref} style={styles.lottie} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 16,
    fontFamily: POPPINS.light,
    color: colors.primaryText,
  },
  lottie: {
    height: 350,
  },
});

export default SearchView;
