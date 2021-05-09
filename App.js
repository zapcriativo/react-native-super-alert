import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Home from './src/Home';

import SuperAlert from './super-alert';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
      <SuperAlert />
    </View>
  );
}

const styles = StyleSheet.create
  ({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
