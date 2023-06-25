import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/Colors';

const FrendsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, color: Colors.primaryColor}}>
        Friends Screen
      </Text>
    </View>
  );
};

export default FrendsScreen;
