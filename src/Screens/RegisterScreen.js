import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../Utils/VectorIcon';
import {Colors} from '../Utils/Colors';
import logo from '../assets/f.png';
import meta from '../assets/meta.png';

const RegisterScreen = ({navigation}) => {
  const {Fullname, setFullName} = useState('');
  const {email, setEmail} = useState('');
  const {createpassword, setPassword} = useState('');
  const {conformpassword, setconformPassword} = useState('');
  const onCreateAccount = () => navigation.navigate('Login');
  const goHome = () => navigation.navigate('Main');
  return (
    <View style={{padding: 16}}>
      <VectorIcon
        name="arrowleft"
        
        type="AntDesign"
        color={Colors.black}
        size={20}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={logo}
          style={{
            height: 60,
            width: 60,
            resizeMode: 'cover',
            marginVertical: '15%',
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
                fontSize: 15,
              }}
              placeholder="Full Name"
              placeholderTextColor={Colors.black}
              value={Fullname}
              onChangeText={value => setFullName(value)}
            />
          </View>
          <TextInput
            style={{
              borderWidth: 0.4,
              borderColor: Colors.bordergrey,
              borderRadius: 10,
              padding: 10,
              fontSize: 15,
              marginBottom: 10,
            }}
            placeholder="Mobile Number or Email"
            placeholderTextColor={Colors.black}
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            style={{
              borderWidth: 0.4,
              borderColor: Colors.bordergrey,
              borderRadius: 10,
              padding: 10,
              fontSize: 15,
              marginBottom: 10,
            }}
            placeholder="Create Password"
            placeholderTextColor={Colors.black}
            value={createpassword}
            onChangeText={value => setPassword(value)}
          />
          <TextInput
            style={{
              borderWidth: 0.4,
              borderColor: Colors.bordergrey,
              borderRadius: 10,
              padding: 10,
              fontSize: 15,
              marginBottom: 10,
            }}
            placeholder="Conform Password"
            placeholderTextColor={Colors.black}
            value={conformpassword}
            onChangeText={value => setconformPassword(value)}
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
            Sign up
          </Text>
        </TouchableOpacity>

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
            marginTop: '25%',
          }}>
          <Text
            style={{
              color: Colors.primaryColor,
              fontWeight: '500',
              fontSize: 15,
            }}>
            Already Have An account
          </Text>
        </TouchableOpacity>
        <Image style={{height: 45, width: 70}} source={meta} />
      </View>
    </View>
  );
};

export default RegisterScreen;
