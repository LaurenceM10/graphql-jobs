import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import SizedBox from 'components/shared/sizedBox';
import Icon from 'react-native-vector-icons/Fontisto';
import { POPPINS } from 'core/presentation/styles/fonts';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

function JobActions({ onSave, onApply }) {
  return (
    <View style={styles.footer}>
      <TouchableWithoutFeedback onPress={onSave}>
        <View style={styles.saveContainer}>
          <Icon size={22} name="favorite" color="#999" />
        </View>
      </TouchableWithoutFeedback>
      <SizedBox width={15} />
      <TouchableWithoutFeedback onPress={onApply}>
        <View style={styles.applyContainer}>
          <Text style={styles.applyText}>Apply Now</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

JobActions.propTypes = {
  onSave: PropTypes.func.isRequired,
  onApply: PropTypes.string.isRequired,
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
  saveContainer: {
    height: 50,
    minWidth: 55,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 14,
    backgroundColor: '#f0f0f0',
  },
  applyContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 14,
    backgroundColor: '#06a762',
  },
  applyText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: POPPINS.light,
  },
});

export default JobActions;
