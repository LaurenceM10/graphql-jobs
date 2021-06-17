import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { POPPINS } from 'core/presentation/styles/fonts';
import MarkdownDisplay from 'react-native-markdown-display';

/**
 * Simple wrapper for react-native-markdown-display customized based on app styles
 * @param children
 * @returns {JSX}
 * @constructor
 */
function Markdown({ children }) {
  return <MarkdownDisplay style={styles}>{children}</MarkdownDisplay>;
}

Markdown.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  // Headings
  heading1: {
    marginVertical: 4,
    fontFamily: POPPINS.semibold,
    fontSize: 26,
  },
  heading2: {
    marginVertical: 4,
    fontFamily: POPPINS.semibold,
    fontSize: 24,
  },
  heading3: {
    marginVertical: 4,
    fontFamily: POPPINS.medium,

    fontSize: 22,
  },
  heading4: {
    marginVertical: 4,
    fontFamily: POPPINS.medium,
  },
  heading5: {
    marginVertical: 4,
    fontFamily: POPPINS.regular,
    fontSize: 20,
  },
  heading6: {
    marginVertical: 4,
    fontFamily: POPPINS.light,
    fontSize: 18,
  },
  // Emphasis
  strong: {
    fontFamily: POPPINS.semibold,
  },
  em: {
    fontStyle: 'italic',
    fontFamily: POPPINS.regular,
  },
  s: {
    textDecorationLine: 'line-through',
  },
  blockquote: {
    fontFamily: POPPINS.light,
  },
  // Lists
  bullet_list: {
    fontFamily: POPPINS.light,
  },
  ordered_list: {
    fontFamily: POPPINS.light,
  },
  list_item: {
    fontFamily: POPPINS.light,
  },
  span: {
    fontFamily: POPPINS.regular,
  },

  text: {
    fontFamily: POPPINS.light,
    fontSize: 14,
  },
  textgroup: {
    fontFamily: POPPINS.regular,
  },
  paragraph: {
    fontFamily: POPPINS.light,
  },
});

export default Markdown;
