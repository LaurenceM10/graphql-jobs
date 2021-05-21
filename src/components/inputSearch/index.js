import React from 'react';
import { View, TextInput } from 'react-native';

function InputSearch() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(100, 100, 100, .1)',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
      }}>
      <TextInput
        placeholder="Search a job"
        placeholderTextColor="#888"
        style={{ padding: 0, fontSize: 16 }}
      />
    </View>
  );
}

export default InputSearch;
