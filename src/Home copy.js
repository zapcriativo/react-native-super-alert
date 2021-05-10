import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export class Home extends Component {

    // showAlert = () => {
    //     console.log('Hello World');
    // }

    render() {
        return (
            <View>
                <Text>Welcome to React Native Super Alert</Text>

                {/* EXAMPLE ALERT ================================== */}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        alert(
                            'Dialog Title',
                            'This is model of default alert, thanks for use the component',
                            {
                                textConfirm: 'blabla',
                                type: 'BottomSheet'
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



            </View>
        )
    }
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

export default Home
