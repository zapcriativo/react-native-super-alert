import React, { useEffect } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {

  confirmClick = () => {
    console.log('Confirm Action')
  }

  cancelClick = () => {
    console.log('Cancel Action Action')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text>Home Screen</Text>

      {/* EXAMPLE ALERT ================================== */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          alert(
            'Dialog Title',
            'This is model of default alert, thanks for use the component',
            {
              textConfirm: 'Confirmar',
              textCancel: 'Cancelar',
              onConfirm: () => confirmClick(),
              onCancel: () => cancelClick()
            },
          )
        }
      >
        <Text style={styles.buttonText}>Default Dialog Example</Text>
      </TouchableOpacity>

      {/* EXAMPLE CONFIRM ================================== */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          alert(
            'Default Dialog Confirm',
            'This is model of default alert, thanks for use the component',
          )
        }
      >
        <Text style={styles.buttonText}>Default Dialog Confirm</Text>
      </TouchableOpacity>


      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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

export default HomeScreen;
