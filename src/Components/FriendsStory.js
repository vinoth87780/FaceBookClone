import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/Colors';
import {StoriesData} from './StoriesData';

const FriendsStory = () => {
  return (
    <>
      {StoriesData.map(item => (
        <View
          key={item.id}
          style={{
            borderWidth: 1,
            borderColor: Colors.lightgrey,
            borderRadius: 10,
            marginLeft: 5,
            position: 'relative',
          }}>
          <Image
            style={{
              height: 170,
              width: 120,
              borderRadius: 10,
            }}
            source={item.StoryImg}
          />
          <View
            style={{
              position: 'absolute',
              top: 5,
              left: 5,
              borderColor: Colors.primaryColor,
              borderRadius: 50,
              borderWidth: 2,
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                resizeMode: 'cover',
              }}
              source={item.profileImg}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              left: '33%',
              bottom: 5,
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default FriendsStory;
