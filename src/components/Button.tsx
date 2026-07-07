import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import {appStyles} from '../styles/appStyle';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  testID?: string;
}

export const Button = ({title, onPress, disabled = false, testID}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[appStyles.button, disabled && appStyles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      testID={testID}
    >
      <Text style={[appStyles.buttonText, disabled && appStyles.textDisabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};