import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {login, logout} from '../../store/slices/userSlice';

import Button from '../../components/Button';

export default function Account() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/profile.png')} />
        <View style={styles.profileBox}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>Afsar Hossen</Text>
            <SimpleLineIcons
              name="pencil"
              color="#53B175"
              size={20}
              style={{marginLeft: 10}}
            />
          </View>

          <Text style={styles.email}>Imshuvo97@gmail.com</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="file-tray-full-outline" size={25} />
            <Text style={styles.itemTitle}>Orders</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={25}
            />
            <Text style={styles.itemTitle}>My Details</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="google-maps" size={25} />
            <Text style={styles.itemTitle}>Delivery Adress</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons name="payment" size={25} />
            <Text style={styles.itemTitle}>Payment Methods</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="gift-outline" size={25} />
            <Text style={styles.itemTitle}>Promo card</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="notifications-outline" size={25} />
            <Text style={styles.itemTitle}>Notifications</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="help-circle-outline" size={25} />
            <Text style={styles.itemTitle}>Help</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons name="info-outline" size={25} />
            <Text style={styles.itemTitle}>About</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button name="Logout" light handlePress={() => dispatch(logout())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  profileBox: {
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Gilroy-ExtraBold',
  },
  email: {
    fontFamily: 'Gilroy-Light',
    color: '#7C7C7C',
  },
  scrollViewContainer: {},
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  itemTitle: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 18,
    marginLeft: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});
