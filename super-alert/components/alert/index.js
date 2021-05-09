import React, { useState, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, Modal, View } from 'react-native';

import styles from "./styles";

const SUPPORTED_ORIENTATIONS = [
    "portrait",
    "portrait-upside-down",
    "landscape",
    "landscape-left",
    "landscape-right"
];

const springValue = new Animated.Value(0);

export default (props) => {

    const { isOpen, close, buttonText, title, message, textConfirm, textCancel } = props;
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        Animated.spring(springValue, {
            toValue: 1,
            speed: 10,
            bounciness: 7,
            velocity: 5,
            useNativeDriver: false
        }).start();
    }, [visible])

    return (
        <Modal
            visible={true}
            transparent
            animationType="none"
            supportedOrientations={SUPPORTED_ORIENTATIONS}
            onRequestClose={springValue.setValue(0)}
        >

            <TouchableOpacity
                activeOpacity={1}
                style={[styles.BackgroundMask]}
            >
                <Animated.View style={[styles.container, { transform: [{ scale: springValue }] }]}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>

                    <View style={styles.containerButtons}>

                        {textCancel && (
                            <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={close}>
                                <Text style={[styles.textButton, styles.textButtonCancel]}>{textCancel}</Text>
                            </TouchableOpacity>
                        )}

                        {textConfirm && (
                            <TouchableOpacity style={[styles.button, styles.buttonConfirm]} onPress={close}>
                                <Text style={[styles.textButton, styles.textButtonConfirm]}>{textConfirm}</Text>
                            </TouchableOpacity>
                        )}

                    </View>

                </Animated.View>
            </TouchableOpacity>
        </Modal>
    );
};
