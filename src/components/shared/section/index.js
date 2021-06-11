import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Padding from 'components/shared/padding';
import { colors } from 'core/presentation/styles/theme';
import { POPPINS } from 'core/presentation/styles/fonts';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  // TODO: consider rendering 2 children (header, body),
  //  to avoid pass as props the padding value that the screen should have as standard
  return (
    <View style={styles.container}>
      <Padding paddingHorizontal={20} paddingVertical={12}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Padding>
      {children}
    </View>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: colors.primaryText,
    fontFamily: POPPINS.medium,
  },
  action: {
    fontSize: 14,
    color: colors.secondaryColor,
    fontFamily: POPPINS.light,
  },
});

export default Section;
