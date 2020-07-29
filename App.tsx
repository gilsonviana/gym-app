import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import theme from '@styled/theme'

import Navigation from '@navigation/index'

export default function App() {
  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: theme.color.light}} behavior="padding">
      <Navigation />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}
