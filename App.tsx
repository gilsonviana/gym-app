import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
// import { useNetInfo } from "@react-native-community/netinfo";

import theme from '@styled/theme'

import Navigation from '@navigation/index'

export default function App() {
  // const { isConnected, isInternetReachable  } = useNetInfo();

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: theme.color.light}} behavior="padding">
      <Navigation />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}
