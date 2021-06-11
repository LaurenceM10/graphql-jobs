import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

function SizedBox({ height, width }) {
  return <View style={{ height, width }} />;
}

SizedBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

SizedBox.defaultProps = {
  width: 0,
  height: 0,
};

export default SizedBox;
