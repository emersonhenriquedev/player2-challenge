import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Badge({label, backgroundColor}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    borderRadius: 5,
    padding: '3%',
    width: 43,
    height: 22,
  },
  label: {
    textAlign: 'center',
    fontSize: 10,
    color: '#7C7C7C',
  },
});
