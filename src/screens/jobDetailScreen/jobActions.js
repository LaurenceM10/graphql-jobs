import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Ripple from 'react-native-material-ripple';

// Styles
import { POPPINS } from 'core/presentation/styles/fonts';

function JobActions({ onApply }) {
  return (
    <View style={styles.footer}>
      <Ripple style={[styles.button, styles.applyContainer]} onPress={onApply}>
        <Text style={styles.applyText}>Apply Now</Text>
      </Ripple>
    </View>
  );
}

JobActions.propTypes = {
  onApply: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  footer: {
    zIndex: 10,
    backgroundColor: '#FFF',
    elevation: 12,
    minHeight: 70,
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 36,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    height: 50,
    borderRadius: 14,
    overflow: 'hidden',
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyContainer: {
    flex: 1,
    backgroundColor: '#06a762',
  },
  applyText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: POPPINS.light,
  },
});

export default JobActions;
