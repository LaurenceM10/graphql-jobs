import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

function Padding({ paddingHorizontal, paddingVertical, children }) {
  return <View style={{ paddingHorizontal, paddingVertical }}>{children}</View>;
}

Padding.propTypes = {
  paddingHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
};

Padding.defaultProps = {
  paddingHorizontal: 0,
  paddingVertical: 0,
};

export default Padding;
