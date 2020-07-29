import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import theme from '@styled/theme'

import Navigation from '@navigation/index'

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: theme.color.light}}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}
