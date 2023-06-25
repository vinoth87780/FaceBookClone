import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/Colors';

const ProfileScreen = ({navigation}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 25, color: Colors.primaryColor}}>
        Profile Screen
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: Colors.primaryColor,
          height: 50,
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          marginBottom: 20,
        }}>
        <Text style={{color: Colors.white, fontSize: 17, fontWeight: '500'}}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
