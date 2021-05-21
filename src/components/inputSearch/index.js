import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { POPPINS } from 'core/presentation/styles/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../core/presentation/styles/colors';

function InputSearch({ onChange }) {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        style={styles.icon}
        size={20}
        color={colors.accentText}
      />
      <TextInput
        placeholder="Search a job"
        placeholderTextColor="#888"
        style={styles.inputText}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(100, 100, 100, .1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    paddingRight: 8,
    color: colors.primaryIcon,
  },
  inputText: {
    top: 2,
    flex: 1,
    padding: 0,
    color: colors.primaryText,
    fontFamily: POPPINS.regular,
  },
});

export default InputSearch;
