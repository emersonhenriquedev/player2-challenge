import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';

import CartItem from '../../components/CartItem';
import ModalCheckout from '../../components/ModalCheckout';
import Separator from '../../components/Separator';

const DATA = [
  {
    id: 1,
    title: 'Bell Pepper Red',
    description: '1kg, Price',
    price: 4.99,
    image: require('../../assets/images/cart1.png'),
  },
  {
    id: 2,
    title: 'Egg Chicken Red',
    description: '4pcs, Price',
    price: 1.99,
    image: require('../../assets/images/cart2.png'),
  },
  {
    id: 3,
    title: 'Organic Bananas',
    description: '12kg, Price',
    price: 3.0,
    image: require('../../assets/images/cart3.png'),
  },
  {
    id: 4,
    title: 'Ginger',
    description: '250gm, Price',
    price: 2.99,
    image: require('../../assets/images/cart4.png'),
  },
  {
    id: 5,
    title: 'Ginger',
    description: '250gm, Price',
    price: 2.99,
    image: require('../../assets/images/cart4.png'),
  },
];

export default function Cart() {
  const [modalVisibile, setModalVisible] = useState(false);
  const renderItem = ({item}) => (
    <CartItem
      title={item.title}
      description={item.description}
      price={item.price}
      image={item.image}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>Go to Checkout</Text>
        <Text style={styles.total}>$12.96</Text>
      </TouchableOpacity>

      <Modal visible={modalVisibile} transparent animationType="fade">
        <ModalCheckout onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '5%',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#53B175',
    width: 364,
    height: 67,
    borderRadius: 19,
    paddingHorizontal: 29,
    paddingVertical: '6%',
    alignSelf: 'center',
  },
  textButton: {
    flex: 3,
    color: '#FFF9FF',
    textAlign: 'center',
    fontWeight: '600',

    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
  },
  total: {
    flex: 1,
    maxWidth: 50,
    height: 22,
    backgroundColor: '#489E67',
    color: '#FCFCFC',
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 12,
    borderRadius: 4,
  },
});
