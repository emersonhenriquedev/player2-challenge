import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import SearchInput from '../../components/SearchInput';
import Banner from '../../components/Banner';
import SectionDivider from '../../components/SectionDivider';
import Card from '../../components/Card';
import CategoryCard from '../../components/CategoryCard';

const DATA = [
  {
    id: 1,
    title: 'Organic Bananas',
    description: '7pcs, Priceg',
    price: 4.99,
    image: require('../../assets/images/fruit1.png'),
  },
  {
    id: 2,
    title: 'Red Apple',
    description: '1kg, Priceg',
    price: 4.99,
    image: require('../../assets/images/fruit2.png'),
  },
  {
    id: 3,
    title: 'Red Apple',
    description: '1kg, Priceg',
    price: 4.99,
    image: require('../../assets/images/fruit3.png'),
  },
];

export default function Home() {
  const navigation = useNavigation();
  const token = useSelector(state => state.user.token);

  console.log(token);

  const renderItem = ({item, index}) => (
    <View style={{marginHorizontal: index === 0 ? 0 : 15}}>
      <Card
        image={item.image}
        title={item.title}
        description={item.description}
        price={item.price}
        handlePress={() => navigation.navigate('ProductDetail')}
      />
    </View>
  );
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '3%',
          }}>
          <Image source={require('../../assets/images/carrot-color.png')} />
          <View style={styles.locationContainer}>
            <Image
              source={require('../../assets/images/checkpoint.png')}
              style={{marginHorizontal: 5}}
            />
            <Text style={styles.locationTitle}>Dhaka, Banassre</Text>
          </View>
        </View>
        <SearchInput />
        <Banner style={{marginVertical: '5%'}} />
        <SectionDivider title="Exclusive Offer" />
      </View>

      <View style={styles.fluidContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.container}>
        <SectionDivider title="Best Selling" />
      </View>
      <View style={styles.fluidContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.container}>
        <SectionDivider title="Groceries" />
      </View>
      <View style={styles.fluidContainer}>
        <FlatList
          data={[1, 2]}
          renderItem={({index}) => (
            <View style={{marginHorizontal: index === 0 ? 0 : 8}}>
              <CategoryCard />
            </View>
          )}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={[styles.fluidContainer, {marginTop: '6%'}]}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#FFF',
  },
  container: {
    padding: '8%',
  },
  fluidContainer: {
    paddingLeft: '8%',
  },
  locationContainer: {
    flexDirection: 'row',
    color: '#4C4F4D',
    alignItems: 'center',
    marginVertical: '2%',
  },
  locationTitle: {
    color: '#4C4F4D',
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
  },
});
