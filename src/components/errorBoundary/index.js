import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import SizedBox from 'components/shared/sizedBox';

// styles
import { POPPINS } from 'core/presentation/styles/fonts';
import { colors } from 'core/presentation/styles/theme';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };

    this.bind();
  }

  bind() {
    this.resetState = this.resetState.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  resetState() {
    this.setState({ hasError: false });
  }

  render() {
    const { state } = this;

    if (state.hasError) {
      return (
        <View testID="ErrorBoundaryContainer" style={styles.container}>
          <Text style={styles.description}>An error has occurred</Text>
          <SizedBox height={22} />
          <TouchableOpacity
            testID="RestoreApp"
            style={styles.button}
            onPress={this.resetState}>
            <Text style={styles.textButton}>Go to home!</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    fontFamily: POPPINS.light,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: colors.secondaryColor,
  },
  textButton: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: POPPINS.light,
  },
});

export default ErrorBoundary;
