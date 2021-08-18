import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
export default function Counter({value = 1, variation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={variation ? styles.border : null}>
        <Icon2 name="minus" size={30} color="#B3B3B3" />
      </TouchableOpacity>
      <View style={([styles.display], !variation ? styles.border : null)}>
        <Text style={styles.value}>{value}</Text>
      </View>
      <TouchableOpacity style={variation ? styles.border : null}>
        <Icon name="add" size={30} color="#53B175" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
  },
  icon: {
    fontSize: 48,
  },
  border: {
    borderWidth: 1,
    borderRadius: 17,
    borderColor: '#E2E2E2',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {},
  value: {
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
  },
});
