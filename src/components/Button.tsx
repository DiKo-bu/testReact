import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import {appStyle} from '../styles/appStyle';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  testID?: string;
}

export const Button = ({title, onPress, disabled = false, testID}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[appStyle.button, disabled && appStyle.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      testID={testID}
    >
      <Text style={[appStyle.buttonText, disabled && appStyle.textDisabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};