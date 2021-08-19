import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

export default function OrderAccepted() {
  const navigation = useNavigation();
  const background = require('../../assets/images/background.png');
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={background} style={styles.container}>
        <Image
          source={require('../../assets/images/order-success.png')}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Your Order has been accepted</Text>
          <Text style={styles.description}>
            Your items has been placecd and is on it’s way to being processed
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button name="Track Order" />
          <TouchableOpacity
            style={{marginTop: 24}}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.backHomeButton}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  image: {},
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  title: {
    color: '#181725',
    fontSize: 28,
    fontFamily: 'Gilroy-ExtraBold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#7C7C7C',
    fontFamily: 'Gilroy-Light',
    lineHeight: 21,
    fontSize: 16,
    marginTop: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backHomeButton: {
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
  },
});
