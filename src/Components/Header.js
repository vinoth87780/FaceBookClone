import {View, Text, Image} from 'react-native';
import React from 'react';
import VectorIcon from '../Utils/VectorIcon';
import {Colors} from '../Utils/Colors';

const Header = () => {
  return (
    <View
      style={{
        margin: 10,
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Image
        style={{height: 70, width: 140}}
        source={{
          uri: 'https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/social-media/facebook-logo.png',
        }}
      />

      <View style={{flexDirection: 'row', margin: 10}}>
        <View
          style={{
            marginRight: 20,

            borderRadius: 100,
          }}>
          <VectorIcon
            name="search"
            type="FontAwesome"
            size={22}
            color={Colors.black}
          />
        </View>
        <View style={{}}>
          <VectorIcon
            name="messenger"
            type="Fontisto"
            size={22}
            color={Colors.black}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
