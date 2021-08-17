import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function SectionDivider({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.link}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '4%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gilroy-ExtraBold',
  },
  link: {
    color: '#53B175',
    fontSize: 16,
  },
});
