import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function ShimmerText({ width, height }) {
  return <View style={[styles.container, { width, height }]} />;
}

ShimmerText.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ShimmerText.defaultProps = {
  width: 30,
  height: 16,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
});

export default ShimmerText;
