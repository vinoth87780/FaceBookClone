import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../Utils/VectorIcon';
import {Colors} from '../Utils/Colors';
import logo from '../assets/f.png';
import meta from '../assets/meta.png';

const LoginScreen = ({navigation}) => {
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');
  const onCreateAccount = () => navigation.navigate('Register');
  const goHome = () => navigation.navigate('Main');
  return (
    <View style={{padding: 16, marginTop: '10%'}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={logo}
          style={{
            height: 60,
            width: 60,
            resizeMode: 'cover',
            marginVertical: '20%',
          }}
        />
        <View style={{width: '95%'}}>
          <View style={{marginBottom: 10}}>
            <TextInput
              style={{
                borderWidth: 0.4,
                borderColor: Colors.bordergrey,
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="mobile number or email"
              placeholderTextColor={Colors.black}
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <TextInput
            style={{
              borderWidth: 0.4,
              borderColor: Colors.bordergrey,
              borderRadius: 10,
              padding: 10,
            }}
            placeholder="enter the password"
            placeholderTextColor={Colors.black}
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <TouchableOpacity
          onPress={goHome}
          style={{
            backgroundColor: Colors.primaryColor,
            borderRadius: 25,
            height: 50,
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 12,
          }}>
          <Text style={{color: Colors.white, fontWeight: '400', fontSize: 18}}>
            Log in
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 15,
          }}>
          Forgot Password?
        </Text>
        <TouchableOpacity
          onPress={onCreateAccount}
          style={{
            backgroundColor: Colors.white,
            borderRadius: 20,
            height: 50,
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 12,
            borderColor: Colors.primaryColor,
            borderWidth: 0.3,
            marginTop: '35%',
          }}>
          <Text
            style={{
              color: Colors.primaryColor,
              fontWeight: '500',
              fontSize: 14,
            }}>
            Create new account
          </Text>
        </TouchableOpacity>
        <Image style={{height: 45, width: 70}} source={meta} />
      </View>
    </View>
  );
};

export default LoginScreen;
