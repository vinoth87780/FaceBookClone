import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/Colors';
import {StoriesData} from './StoriesData';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
const Post = () => {
  return (
    <>
      {StoriesData.map(item => (
        <View
          key={item.id}
          style={{
            backgroundColor: Colors.white,
            marginTop: 8,
          }}>
          <PostHeader />
          <Image
            style={{width: '100%', height: 300, marginTop: 12}}
            source={item.StoryImg}
          />
          <PostFooter />
        </View>
      ))}
    </>
  );
};

export default Post;
