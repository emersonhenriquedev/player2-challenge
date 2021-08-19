import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Onbording from './pages/Onbording';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import OrderAccepted from './pages/OrderAccepted';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Shop') {
            color = focused ? '#53B175' : '#030303';
            return (
              <MaterialCommunityIcons
                name="store-outline"
                color={color}
                size={24}
              />
            );
          } else if (route.name === 'Cart') {
            color = focused ? '#53B175' : '#030303';
            return <Ionicons name="cart-outline" color={color} size={24} />;
          }
        },
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: '#030303',
        tabBarStyle: {
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      })}>
      <Tab.Screen name="Shop" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Onbording}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Cart"
          component={Cart}
          options={{title: 'My Cart'}}
        /> */}
        <Stack.Screen
          name="OrderAccepted"
          component={OrderAccepted}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
