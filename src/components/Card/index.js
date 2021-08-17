import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import AddButton from '../AddButton';

export default function Card({image, title, description, price}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>${price}</Text>
        <AddButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 248.51,
    width: 173.32,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    padding: '5%',
    justifyContent: 'space-around',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: '8%',
    // backgroundColor: 'green',
    height: 90,
  },
  image: {},
  body: {
    height: 80,
    // backgroundColor: 'green',
  },
  title: {
    color: '#181725',
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
  },
  description: {
    color: '#7C7C7C',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15%',
  },
  price: {
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
  },
});
