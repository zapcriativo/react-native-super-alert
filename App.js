import React, { useRef } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen'
import DetailScreen from './src/DetailScreen'

import SuperAlert from './super-alert';

export default function App() {

  const refInput = useRef(null);
  const Stack = createStackNavigator();

  const customStyle = {
    container: {
      backgroundColor: '#000',
    },
    buttonCancel: {
      backgroundColor: 'orange',
    },
    buttonConfirm: {
      backgroundColor: 'green',
    },
    title: {
      color: 'yellow'
    },
    message: {
      color: 'pink'
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
      <SuperAlert />
    </NavigationContainer>
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
