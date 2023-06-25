import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../Utils/Colors';
const MarkPlaceScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, color: Colors.primaryColor}}>
        MarkPlace Screen
      </Text>
    </View>
  );
};

export default MarkPlaceScreen;
