import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  confirmClick = () => {
    console.log('Confirm Action')
  }

  cancelClick = () => {
    console.log('Cancel Action Action')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Hello!</Text>
      <Text style={{ marginBottom: 20, marginTop: 10 }}>This is a Super Alert Example APP!</Text>

      {/* EXAMPLE ALERT SIMPLE ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: 'green' }]}
        onPress={() =>
          alert(
            'Simple Alert',
            "Hello, I'm the example of Simple Alert",
          )
        }
      >
        <Text style={styles.buttonText}>Simple</Text>
      </TouchableOpacity>


      {/* EXAMPLE ALERT FROM TOP ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: '#0042a6' }]}
        onPress={() =>
          alert(
            'Simple Alert Top',
            "Hello, I'm the example of Simple Alert from top",
            {
              position: 'top',
            },
          )
        }
      >
        <Text style={styles.buttonText}>Simple  Top</Text>
      </TouchableOpacity>

      <View style={styles.container_left_right_buttons}>
        {/* EXAMPLE ALERT FROM LEFT ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#0042a6', marginRight: 10 }]}
          onPress={() =>
            alert(
              'Simple Alert Left',
              "Hello, I'm the example of Simple Alert from left",
              {
                position: 'left',
              },
            )
          }
        >
          <Text style={styles.buttonText}> {'<'}  Simple Left</Text>
        </TouchableOpacity>

        {/* EXAMPLE ALERT FROM RIGHT ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#0042a6' }]}
          onPress={() =>
            alert(
              'Simple Alert Right',
              "Hello, I'm the example of Simple Alert from right",
              {
                position: 'right',
              },
            )
          }
        >
          <Text style={styles.buttonText}>Simple Right  {'>'} </Text>
        </TouchableOpacity>
      </View>

      {/* EXAMPLE ALERT FROM TOP ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: '#0042a6' }]}
        onPress={() =>
          alert(
            'Simple Alert Top',
            "Hello, I'm the example of Simple Alert from bottom",
            {
              position: 'bottom',
            },
          )
        }
      >
        <Text style={styles.buttonText}>Simple Bottom</Text>
      </TouchableOpacity>

      {/* EXAMPLE ALERT ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: '#eb4034' }]}
        onPress={() =>
          alert(
            'Confirm Alert',
            'This is model of Confirm Alert, with me you can use callback functions',
            {
              textConfirm: 'Confirmar',
              textCancel: 'Cancelar',
              onConfirm: () => confirmClick(),
              onCancel: () => cancelClick()
            },
          )
        }
      >
        <Text style={styles.buttonText}>Confirm Alert</Text>
      </TouchableOpacity>

      {/* BOTTOM SHEET ALERT ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: '#a065c2' }]}
        onPress={() =>
          alert(
            'Dialog Title',
            'This is model of default alert, thanks for use the component',
            {
              type: 'bottomsheet',
              textConfirm: 'Confirmar',
              textCancel: 'Cancelar',
              bottomSheetHeight: 200,
              onConfirm: () => confirmClick(),
              onCancel: () => cancelClick()
            },
          )
        }
      >
        <Text style={styles.buttonText}>Bottomsheet Alert</Text>
      </TouchableOpacity>


      {/* EXAMPLE FLASH  ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: '#2185b8' }]}
        onPress={() =>
          alert(
            'Title',
            'This is model of default alert, thanks for use the component',
            {
              type: 'flashmessage',
            },
          )
        }
      >
        <Text style={styles.buttonText}>Flash Message</Text>
      </TouchableOpacity>


      {/* EXAMPLE FLASH SUCCESS  ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: '#2185b8' }]}
        onPress={() =>
          alert(
            'Title',
            'This is model of default alert, thanks for use the component',
            {
              type: 'flashmessage',
              option: 'danger', //"success" (green), "warning" (orange), "danger" (red), "info" (blue) and "default" (white).
              timeout: 1, 
            },
          )
        }
      >
        <Text style={styles.buttonText}>Flash Message Success</Text>
      </TouchableOpacity>




      {/* EXAMPLE FLASH MESSAGE COMPLETE ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: '#2185b8' }]}
        onPress={() =>
          alert(
            'Title',
            'This is model of default alert, thanks for use the component',
            {
              type: 'flashmessage',
              textConfirm: 'Confirmar',
              textCancel: 'Cancelar',
              TitleTextAlign:  'left',
              MessageTextAlign: 'left',
              flashMessageHeight: 120,
              timeout: 10, 
              onConfirm: () => confirmClick(),
              onCancel: () => cancelClick()
            },
          )
        }
      >
        <Text style={styles.buttonText}>Flash Message Complete</Text>
      </TouchableOpacity>



      {/* EXAMPLE REACT NAVIGATION ================================== */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: '#0c966f' }]}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Use inside child and react navigation</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: '#fff'
  },
  container_left_right_buttons: {
    flexDirection: 'row'
  }
});

export default HomeScreen;
