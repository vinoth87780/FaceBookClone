import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/Colors';
import img from '../assets/profile/1.jpg';
const SubHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 18,
        backgroundColor: Colors.white,
      }}>
      <Image style={{width: 40, height: 40, borderRadius: 50}} source={img} />
      <View
        style={{
          borderWidth: 1,
          borderColor: Colors.bordergrey,
          borderRadius: 30,
          paddingHorizontal: 20,
          width: '70%',
          height: 40,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            alignItems: 'center',
            fontSize: 11,
            color: Colors.black,
          }}>
          write somting here
        </Text>
        <Text style={{fontSize: 14, alignItems: 'center', color: Colors.black}}>
          Hey using facebook...
        </Text>
      </View>
      <Image
        style={{width: 30, height: 30}}
        source={require('../assets/image.png')}
      />
    </View>
  );
};

export default SubHeader;
