import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearTextGradient } from 'react-native-text-gradient';

// Styles
import { colors } from 'core/presentation/styles/theme';

function TextGradient({ children, style, gradientColors, containerStyles }) {
  return (
    <LinearTextGradient
      style={containerStyles}
      locations={[0, 1]}
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <Text style={style}>{children}</Text>
    </LinearTextGradient>
  );
}

TextGradient.propTypes = {
  style: PropTypes.object,
  containerStyles: PropTypes.object,
  children: PropTypes.node.isRequired,
  gradientColors: PropTypes.arrayOf(PropTypes.string),
};

TextGradient.defaultProps = {
  style: {},
  containerStyles: {},
  gradientColors: [colors.primaryColor, colors.secondaryColor],
};

export default TextGradient;
