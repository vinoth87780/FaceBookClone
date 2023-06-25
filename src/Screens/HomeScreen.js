import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import SubHeader from '../Components/SubHeader';
import Stories from '../Components/Stories';
import Post from '../Components/Post';

const HomeScreen = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubHeader />

        <Stories />
        <Post />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
