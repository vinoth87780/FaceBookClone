import {View, Text, Image} from 'react-native';
import React from 'react';
import Like from '../assets/Iconpng/3.png';
import Emoji from '../assets/Iconpng/2.png';
import Heart from '../assets/Iconpng/1.png';
import {Colors} from '../Utils/Colors';
import VectorIcon from '../Utils/VectorIcon';
const PostFooter = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          justifyContent: 'space-between',
          marginRight: 15,

          borderBottomWidth: 1,
          borderBottomColor: Colors.lightgrey,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
          <Image
            style={{height: 22, width: 25, marginLeft: 10, marginRight: 3}}
            source={Like}
          />
          <Image
            style={{height: 22, width: 22, marginRight: 3}}
            source={Emoji}
          />
          <Image style={{height: 18, width: 22}} source={Heart} />
          <Text style={{color: Colors.textGrey, fontSize: 14}}>180</Text>
        </View>
        <View>
          <Text>Comment 35</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 30,
            marginRight: 30,
            marginBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <VectorIcon
              name="like2"
              type="AntDesign"
              color={Colors.black}
              size={25}
            />
            <Text style={{marginLeft: 5, color: Colors.black}}>Like</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <VectorIcon
              name="chatbox-ellipses-outline"
              type="Ionicons"
              color={Colors.black}
              size={25}
            />
            <Text style={{marginLeft: 5, color: Colors.black}}>Comments</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <VectorIcon
              name="ios-arrow-redo-outline"
              type="Ionicons"
              color={Colors.black}
              size={25}
            />
            <Text style={{marginLeft: 5, color: Colors.black}}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostFooter;
