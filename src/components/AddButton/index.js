import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function AddButton({handlePress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={require('../../assets/images/more-icon.png')}
        style={styles.icon}
      />
       {/* <Text style={styles.text}>+</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    width: 45.67,
    height: 45.67,
    borderRadius: 19,
    justifyContent: 'center',
    // paddingHorizontal: '35%',
    // paddingVertical: '6%',
    // alignSelf: 'center',
  },
  text: {
    color: '#FFF9FF',
    textAlign: 'center',
    fontWeight: '600',
    // fontFamily: 'Gilroy-Light',
    // fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
  },
  icon: {
    alignSelf: 'center',
  },
});
