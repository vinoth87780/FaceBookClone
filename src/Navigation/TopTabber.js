import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import VectorIcon from '../Utils/VectorIcon';
import {Colors} from '../Utils/Colors';
import {TabData} from '../data/TabData';

const Tab = createMaterialTopTabNavigator();
const TopTabber = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.textGrey,
        })}>
        {TabData.map(tab => (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.route}
            options={{
              tabBarIcon: ({color, focused}) => (
                <VectorIcon
                  type={
                    focused
                      ? tab.tabBarActiveiconType
                      : tab.tabBarActiveiconType
                  }
                  name={
                    focused
                      ? tab.tabBarActiveiconName
                      : tab.tabBarInActiveiconName
                  }
                  size={tab.size}
                  color={color}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default TopTabber;
