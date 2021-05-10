import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function DetailsScreen({ navigation}) {

  DetailConfirm = () => {
    console.log('Confirm Details Screen')
    navigation.navigate('Home')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      {/* EXAMPLE ALERT ================================== */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          alert(
            'Dialog Title',
            'This is model of default alert, thanks for use the component',
            {
              textConfirm: 'Confirma Tela Detalhes',         
              onConfirm: () => DetailConfirm(),  
            },
          )
        }
      >
        <Text style={styles.buttonText}>Default Dialog Example</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
      color: 'red',
      marginTop: 10,
      padding: 10,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
  },
  buttonText: {
      color: '#fff'
  }
});

export default DetailsScreen;
