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

  // onClose = () => { console.log('maooeeee') }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
      <SuperAlert />
    </NavigationContainer>
  );


  // return (
  // <View style={styles.container}>
  //   <StatusBar style="auto" />
  //   <Home ref={refInput} />
  //   <SuperAlert onClose={onClose} />
  // </View>
  // );
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
