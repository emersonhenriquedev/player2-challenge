import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/search-icon.png')} />
      <TextInput style={styles.input} placeholder="Search Store" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingHorizontal: '4%',
  },
  input: {
    marginLeft: 5,
    color: '#181B19',
    fontSize: 14,
    width: '100%',
    fontFamily: 'Gilroy-Light',
  },
});
