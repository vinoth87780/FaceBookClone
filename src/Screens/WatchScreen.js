import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/Colors';
const WatchScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, color: Colors.primaryColor}}>
        Settings Screen
      </Text>
    </View>
  );
};

export default WatchScreen;
