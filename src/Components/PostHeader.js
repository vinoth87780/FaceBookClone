import {View, Text, Image} from 'react-native';
import React from 'react';
import {StoriesData} from './StoriesData';
import img from '../assets/profile/1.jpg';
import VectorIcon from '../Utils/VectorIcon';
import {Colors} from '../Utils/Colors';
const PostHeader = () => {
  return (
    <View>
      <View style={{paddingTop: 16, paddingLeft: 16, marginRight: 15}}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 40, height: 40, borderRadius: 50}}
                source={img}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16, color: Colors.textColor}}>
                  Bruce Banner
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: Colors.textGrey}}>2d</Text>
                  <Text style={{paddingHorizontal: 5}}>◉</Text>
                  <VectorIcon
                    name="user-friends"
                    size={15}
                    type="FontAwesome5"
                    color={Colors.textGrey}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <VectorIcon
                style={{marginRight: 10}}
                name="dots-three-horizontal"
                size={25}
                type="Entypo"
                color={Colors.black}
              />
              <VectorIcon
                name="close"
                size={25}
                type="Ionicons"
                color={Colors.black}
              />
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 16,
              color: Colors.textColor,
              marginTop: 5,
              marginBottom: 5,
            }}>
            Can,t stop putting more pants in my home
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostHeader;
