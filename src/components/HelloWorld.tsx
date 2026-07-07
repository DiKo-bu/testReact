import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {appStyles} from '../styles/appStyles';
import {
  GREETING_TEXT,
  BUTTON_PRESSED_TEXT,
  BUTTON_TITLE,
  ALREADY_PRESSED_ALERT,
  ALREADY_PRESSED_MSG,
} from '../constants/strings';
import {Button} from './Button';

export const HelloWorld = () => {
  const [greeting, setGreeting] = useState(GREETING_TEXT);

  const handlePress = () => {
 /*   if (greeting === BUTTON_PRESSED_TEXT) {
      Alert.alert(ALREADY_PRESSED_ALERT, ALREADY_PRESSED_MSG);
      return;
    }
*/
    setGreeting(BUTTON_PRESSED_TEXT);
  };

  return (
    <View style={appStyle.container}>
      <Text style={appStyle.text}>{greeting}</Text>
      <Button title={BUTTON_TITLE} onPress={handlePress} />
    </View>
  );
};