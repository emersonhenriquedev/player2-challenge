import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  Text,
  ImageBackground,
} from 'react-native';

import Button from '../../components/Button';

export default function Onbording() {
  const background = require('../../assets/images/onboarding.png');
  const iconCarrot = require('../../assets/images/carrot.png');
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <ImageBackground source={background} style={styles.backgroundImg}>
        <View style={styles.container}>
          <Image
            source={iconCarrot}
            width={48}
            height={56}
            style={{marginBottom: '5%'}}
          />
          <View style={styles.textBox}>
            <Text style={styles.title}>Welcome to our store</Text>
            <Text style={styles.lead}>
              Get your groceries in as fast as one hour
            </Text>
          </View>

          <Button name="Get Started" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: '15%',
    marginBottom: '20%',
  },
  textBox: {
    marginBottom: '7%',
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontFamily: 'Gilroy-ExtraBold',
    textAlign: 'center',
  },
  lead: {
    color: '#fff',
    fontFamily: 'Gilroy-Light',
    fontSize: 14,
    width: '100%',
  },
});
