import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({name, handlePress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    width: 364,
    height: 67,
    justifyContent: 'center',
    borderRadius: 19,
    // paddingHorizontal: '30%',
    paddingVertical: '6%',
    alignSelf: 'center',
  },
  text: {
    color: '#FFF9FF',
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
  },
});
