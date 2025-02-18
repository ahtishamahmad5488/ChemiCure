import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigator from './src/Routes/MainNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
