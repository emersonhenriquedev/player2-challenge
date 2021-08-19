import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slices/userSlice';

import Button from '../../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (password.length !== 0 && email.length !== 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [password, email]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isValid) {
      dispatch(login());
      navigation.navigate('Home');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar hidden={false} barStyle="default" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Image
            source={require('../../assets/images/login.png')}
            style={styles.image}
          />
          <View style={styles.form}>
            <View style={styles.headerBox}>
              <Text style={styles.title}>Login</Text>
              <Text style={styles.lead}>Enter your email and password</Text>
            </View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              onChange={setEmail}
              // defaultValue="imshuvo97@gmail.com"
            />
            <Text style={[styles.label, {marginTop: '8%'}]}>Password</Text>
            <TextInput
              style={[styles.input, {letterSpacing: 8}]}
              secureTextEntry
              onChange={setPassword}
              // defaultValue="12345678"
            />
            <Text
              style={[
                styles.label,
                {marginVertical: '8%', color: '#181725', fontSize: 14},
              ]}>
              Forgot Password?
            </Text>
            <Button
              name="Log in"
              light={!isValid ? true : false}
              // handlePress={() => navigation.navigate('Home')}
              handlePress={handleLogin}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.label,
                  {marginVertical: '8%', color: '#181725', fontSize: 14},
                ]}>
                Don't have an account?
              </Text>
              <Text style={{color: '#53B175', marginLeft: 4}}>Signup</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  image: {
    width: '100%',
    height: '40%',
  },
  form: {
    paddingHorizontal: '8%',
  },
  headerBox: {
    marginBottom: '8%',
  },
  title: {
    color: '#181725',
    fontSize: 26,
    fontFamily: 'Gilroy-ExtraBold',
    marginBottom: '3%',
  },
  lead: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: 'Gilroy-Light',
  },
  label: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: 'Gilroy-Light',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    color: '#181725',
    fontSize: 18,
  },
});
