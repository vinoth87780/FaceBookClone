import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/Colors';
import CreateStories from './CreateStories';
import FriendsStory from './FriendsStory';

const Stories = () => {
  return (
    <ScrollView
      style={{
        padding: 10,
        marginTop: 5,
        backgroundColor: Colors.white,
      }}
      contentContainerStyle={{paddingRight: 20}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CreateStories />
      <FriendsStory />
    </ScrollView>
  );
};

export default Stories;
