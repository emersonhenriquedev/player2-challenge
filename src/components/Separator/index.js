import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Separator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: 'rgba(226, 226, 226, 0.7)',
    marginVertical: '4%',
  },
});
