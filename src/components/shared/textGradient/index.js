import React from 'react';
import { Text } from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';
import { colors } from 'core/presentation/styles/theme';

function TextGradient({
  children,
  gradientColors = [colors.primaryColor, colors.secondaryColor],
  style = {},
  containerStyles = {},
}) {
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

export default TextGradient;
