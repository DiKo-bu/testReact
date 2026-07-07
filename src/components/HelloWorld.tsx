import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {appStyle} from '../styles/appStyle';
import {GREETING_TEXT, BUTTON_TITLE, LOADING_TEXT} from '../constants/strings';
import {API_URL} from '../constants/api';
import {useFetchData} from '../hooks/useFetchData';
import {Button} from './Button';
import {DataViewer} from './DataViewer';

export const HelloWorld = () => {
  const [greeting, setGreeting] = useState(GREETING_TEXT);
  const {data, loading, error, fetchData} = useFetchData(API_URL);

  const handlePress = async () => {
    await fetchData();
    if (!error && data) {
      setGreeting('Данные получены!');
    } else if (error) {
      Alert.alert('Ошибка', error);
    }
  };

  return (
    <View style={appStyle.container}>
      <Text style={appStyle.text}>{greeting}</Text>
      <Button
        title={loading ? LOADING_TEXT : BUTTON_TITLE}
        onPress={handlePress}
        disabled={loading}
      />
      <DataViewer data={data} loading={loading} error={error} />
    </View>
  );
};