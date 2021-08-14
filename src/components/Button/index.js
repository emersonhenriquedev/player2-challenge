import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({name}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    width: 364,
    borderRadius: 19,
    paddingHorizontal: '35%',
    paddingVertical: '6%',
  },
  text: {
    color: '#FFF9FF',
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Gilroy-Light',
    fontSize: 16,
  },
});
