import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Counter from '../Counter';

export default function CartItem({title, description, price, image}) {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="contain" style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Icon name="close" size={28} color="#B3B3B3" />
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.footer}>
          <Counter variation />
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 4,
    marginLeft: 32,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
  },
  description: {
    color: '#7C7C7C',
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 13,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
  },
});
