import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
export default function Counter({value = 1}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon2 name="minus" size={30} color="#B3B3B3" />
      </TouchableOpacity>
      <View style={styles.display}>
        <Text style={styles.value}>{value}</Text>
      </View>
      <TouchableOpacity>
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
  display: {
    borderWidth: 1,
    borderRadius: 17,
    width: 45,
    height: 45,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
  },
});
