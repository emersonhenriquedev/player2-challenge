import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function CategoryCard() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../../assets/images/pulses.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Pulses</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8A44C',
    width: 248.19,
    height: 105,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '3%',
  },
  image: {},
  title: {
    marginLeft: '5%',
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
  },
});
