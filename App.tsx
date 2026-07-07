import React from 'react';
import {SafeAreaView} from 'react-native';
import {HelloWorld} from './src/components/HelloWorld';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HelloWorld />
    </SafeAreaView>
  );
};

export default App;