import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';

import Ripple from 'react-native-material-ripple';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

function TopBar({ onSave, goBack, animatedStyle }) {
  return (
    <Animated.View style={[styles.header, animatedStyle]}>
      <Ripple style={styles.icon} onPress={goBack}>
        <Ionicons size={22} name="arrow-back" color="#555" />
      </Ripple>
      <Ripple style={styles.icon} onPress={onSave}>
        <Fontisto size={22} name="favorite" color="#bbb" />
      </Ripple>
    </Animated.View>
  );
}

TopBar.propTypes = {
  onSave: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 18,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(200, 200 ,200, .2)',
  },
});

export default TopBar;
