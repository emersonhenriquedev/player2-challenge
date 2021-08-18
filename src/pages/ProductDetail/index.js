import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Carousel from 'pinar';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {useNavigation} from '@react-navigation/native';

import Counter from '../../components/Counter';
import Separator from '../../components/Separator';
import Badge from '../../components/Badge';
import Button from '../../components/Button';

export default function ProductDetail() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.featured}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={32}
              color="#181725"
            />
          </TouchableOpacity>
          <Icon name="share" size={22} color="#181725" />
        </View>
        <Carousel>
          <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Image source={require('../../assets/images/product-detail.png')} />
          </View>
        </Carousel>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>Naturel Red Apple</Text>
          <TouchableOpacity>
            <Icon name="heart" size={24} color="#7C7C7C" />
          </TouchableOpacity>
          {/* <Image source={require('../../assets/images/favo-icon.png')} /> */}
        </View>
        <Text style={styles.description}>1kg, Price</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: '7%',
          }}>
          <Counter />
          <Text style={styles.total}>$4.99</Text>
        </View>
        <Separator />
        <Collapse isExpanded={true}>
          <CollapseHeader
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.collapseTitle}>Product Detail</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="#181725"
            />
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.collapseContentText}>
              Apples are nutritious. Apples may be good for weight loss. apples
              may be good for your heart. As part of a healtful and varied diet.
            </Text>
          </CollapseBody>
        </Collapse>
        <Separator />
        <Collapse>
          <CollapseHeader
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.collapseTitle}>Nutritions</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Badge label="100gr" />
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="#181725"
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.collapseContentText}>
              Apples are nutritious. Apples may be good for weight loss. apples
              may be good for your heart. As part of a healtful and varied diet.
            </Text>
          </CollapseBody>
        </Collapse>
        <Separator />
        <Collapse>
          <CollapseHeader
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.collapseTitle}>Review</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <FontAwesome name="star" color="#F3603F" size={18} />
              <FontAwesome name="star" color="#F3603F" size={18} />
              <FontAwesome name="star" color="#F3603F" size={18} />
              <FontAwesome name="star" color="#F3603F" size={18} />
              <FontAwesome name="star" color="#F3603F" size={18} />
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="#181725"
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.collapseContentText}>
              Apples are nutritious. Apples may be good for weight loss. apples
              may be good for your heart. As part of a healtful and varied diet.
            </Text>
          </CollapseBody>
        </Collapse>
        <View style={{marginTop: '5%', marginBottom: '15%'}}>
          <Button name="Add To Basket" />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  featured: {
    backgroundColor: 'rgba(242, 243, 242, .7)',
    height: '35%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
  },
  content: {
    flex: 1,
    padding: '7.5%',
  },
  title: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 22,
  },
  description: {
    color: '#7C7C7C',
  },
  total: {
    fontSize: 22,
    fontFamily: 'Gilroy-ExtraBold',
  },
  collapseTitle: {
    fontSize: 16,
    fontFamily: 'Gilroy-ExtraBold',
  },
  collapseContentText: {
    lineHeight: 21,
    fontFamily: 'Gilroy-Light',
    color: '#7C7C7C',
  },
});
