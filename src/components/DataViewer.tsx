import React from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {appStyle} from '../styles/appStyle';

interface DataViewerProps {
  data: string | null;
  loading: boolean;
  error: string | null;
}

export const DataViewer = ({data, loading, error}: DataViewerProps) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#007AFF" style={{marginTop: 20}} />;
  }

  if (error) {
    return <Text style={appStyle.errorText}>Ошибка: {error}</Text>;
  }

  if (!data) {
    return null; // или можно показать placeholder
  }

  return (
    <View style={appStyle.dataContainer}>
      <Text style={appStyle.dataTitle}>Ответ сервера:</Text>
      <ScrollView horizontal style={appStyle.dataScroll}>
        <Text style={appStyle.dataText}>{data}</Text>
      </ScrollView>
    </View>
  );
};