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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }} >
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Hello!</Text>
      <Text style={{ marginBottom: 20, marginTop: 10 }}>This is a Super Alert Example APP!</Text>

      {/* ALERT SECTION ================================== */}
      <View style={[styles.section, { width: '100%', borderTopWidth: 1, justifyContent: 'center', borderTopColor: '#dadada', paddingTop: 10 }]}>
        {/* EXAMPLE ALERT SIMPLE ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#0042a6' }]}
          onPress={() =>
            alert(
              'Simple Alert',
              "Hello, I'm the example of Simple Alert",
            )
          }
        >
          <Text style={styles.buttonText}>Default</Text>
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
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.section}>
        {/* EXAMPLE ALERT FROM LEFT ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#0042a6' }]}
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
          <Text style={styles.buttonText}>Left</Text>
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
          <Text style={styles.buttonText}>Top</Text>
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
          <Text style={styles.buttonText}>Right</Text>
        </TouchableOpacity>

        {/* EXAMPLE ALERT FROM TOP ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#0042a6' }]}
          onPress={() =>
            alert(
              'Simple Alert Bottom',
              "Hello, I'm the example of Simple Alert from bottom",
              {
                position: 'bottom',
              },
            )
          }
        >
          <Text style={styles.buttonText}>Bottom</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { width: '100%', borderTopWidth: 1, justifyContent: 'center', borderTopColor: '#dadada', paddingTop: 10, marginTop: 10 }]}>
        {/* BOTTOM SHEET ALERT ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#a065c2' }]}
          onPress={() =>
            alert(
              'BottomSheet Alert',
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
      </View>

      <View style={[styles.section, { width: '100%', borderTopWidth: 1, justifyContent: 'center', borderTopColor: '#dadada', paddingTop: 10, marginTop: 10 }]}>
        {/* EXAMPLE FLASH  ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#878787', }]}
          onPress={() =>
            alert(
              'Flash Message',
              'This is a Flash Message Example',
              {
                type: 'flashmessage',
              },
            )
          }
        >
          <Text style={styles.buttonText}>Flash</Text>
        </TouchableOpacity>

        {/* EXAMPLE FLASH ANGER  ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#0c966f' }]}
          onPress={() =>
            alert(
              'Flash Message',
              'This is model of default alert, thanks for use the component',
              {
                type: 'flashmessage',
                option: 'success',
                timeout: 10,
              },
            )
          }
        >
          <Text style={styles.buttonText}>Flash Success</Text>
        </TouchableOpacity>

        {/* EXAMPLE FLASH DANGER  ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#eb4034' }]}
          onPress={() =>
            alert(
              'Title',
              'This is model of default alert, thanks for use the component',
              {
                type: 'flashmessage',
                option: 'danger',
                timeout: 10,
              },
            )
          }
        >
          <Text style={styles.buttonText}>Flash Danger</Text>
        </TouchableOpacity>

        {/* EXAMPLE FLASH WARNING  ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#DB8739' }]}
          onPress={() =>
            alert(
              'Title',
              'This is model of default alert, thanks for use the component',
              {
                type: 'flashmessage',
                option: 'warning',
                timeout: 10,
              },
            )
          }
        >
          <Text style={styles.buttonText}>Flash Warning</Text>
        </TouchableOpacity>

        {/* EXAMPLE FLASH INFO  ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#2185b8' }]}
          onPress={() =>
            alert(
              'Title',
              'This is model of default alert, thanks for use the component',
              {
                type: 'flashmessage',
                option: 'info',
                timeout: 10,
              },
            )
          }
        >
          <Text style={styles.buttonText}>Flash Info</Text>
        </TouchableOpacity>

        {/* EXAMPLE FLASH MESSAGE COMPLETE ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#878787' }]}
          onPress={() =>
            alert(
              'Title',
              'This is model of default alert, thanks for use the component',
              {
                type: 'flashmessage',
                textConfirm: 'Confirmar',
                textCancel: 'Cancelar',
                TitleTextAlign: 'left',
                MessageTextAlign: 'left',
                flashMessageHeight: 120,
                timeout: 100,
                onConfirm: () => confirmClick(),
                onCancel: () => cancelClick()
              },
            )
          }
        >
          <Text style={styles.buttonText}>Flash Message Complete</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { width: '100%', borderTopWidth: 1, justifyContent: 'center', borderTopColor: '#dadada', paddingTop: 10, marginTop: 10 }]}>
        {/* EXAMPLE REACT NAVIGATION ================================== */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: '#0c966f' }]}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Use inside child and react navigation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    color: '#fff'
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default HomeScreen;
