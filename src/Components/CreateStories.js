import {View, Text, Image} from 'react-native';
import React from 'react';
import VectorIcon from '../Utils/VectorIcon';
import {Colors} from '../Utils/Colors';
import img from '../assets/profile/1.jpg';

const CreateStories = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Colors.lightgrey,
        borderRadius: 10,
        backgroundColor: Colors.storyImagebg,
        alignItems: 'center',
        position: 'relative',
        height: 170,
        width: 120,
      }}>
      <Image
        style={{
          height: 110,
          width: 110,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={img}
      />
      <View
        style={{
          position: 'absolute',
          top: '58%',
          backgroundColor: Colors.white,
          borderRadius: 50,
        }}>
        <VectorIcon
          name="circle-with-plus"
          type="Entypo"
          size={30}
          color={Colors.primaryColor}
        />
      </View>
      <Text
        style={{
          color: Colors.black,
          fontWeight: 'bold',
          marginTop: 20,

          width: '50%',
          fontSize: 15,

          textAlign: 'center',
        }}>
        Create story
      </Text>
    </View>
  );
};

export default CreateStories;
