import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Button from '../Button';

export default function ModalCheckout({onClose}) {
  const navigation = useNavigation();
  const startOrder = () => {
    onClose();
    navigation.navigate('OrderAccepted');
  };
  return (
    <View style={styles.modalContainer}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{flex: 1}} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Checkout</Text>
          <TouchableOpacity onPress={onClose}>
            <AntDesign name="close" size={30} color="#181725" />
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>Delivery</Text>
          <TouchableOpacity style={styles.itemActionContainer}>
            <Text style={styles.itemActionName}>Select Method</Text>
            <MaterialIcons name="keyboard-arrow-right" size={32} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>Payment</Text>
          <TouchableOpacity style={styles.itemActionContainer}>
            <Image source={require('../../assets/images/card.png')} />
            <MaterialIcons name="keyboard-arrow-right" size={32} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>Promo Code</Text>
          <TouchableOpacity style={styles.itemActionContainer}>
            <Text style={styles.itemActionName}>Pick discount</Text>
            <MaterialIcons name="keyboard-arrow-right" size={32} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>Total Cost</Text>
          <TouchableOpacity style={styles.itemActionContainer}>
            <Text style={styles.itemActionName}>$13.97</Text>
            <MaterialIcons name="keyboard-arrow-right" size={32} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#7C7C7C',
            fontFamily: 'Gilroy-Light',
            marginVertical: 20,
          }}>
          By placing an order you agree to our Terms And Conditions
        </Text>
        <Button name="Place Order" handlePress={startOrder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 2,
    backgroundColor: '#F2F3F2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(226, 226, 226, 0.7)',
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gilroy-ExtraBold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(226, 226, 226, 0.7)',
    paddingVertical: 20,
  },
  itemName: {
    color: '#7C7C7C',
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 18,
  },
  itemActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemActionName: {
    color: '#181725',
    fontSize: 16,
    fontFamily: 'Gilroy-ExtraBold',
  },
});
