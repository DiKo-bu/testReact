import React from 'react';
import {Text, View} from 'react-native';
import {appStyle} from '../styles/appStyle';
import {my_TEXT} from '../constants/strings';

export const HelloWorld = () => {
  return (
    <View style={appStyle.container}>
      <Text style={appStyle.text}>{my_TEXT}</Text>
    </View>
  );
};