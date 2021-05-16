import React, { useState, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, Modal, View, Dimensions } from 'react-native';

import styles from "./styles";

const windowWidth = Dimensions.get('screen').width;

const SUPPORTED_ORIENTATIONS = [
    "portrait",
    "portrait-upside-down",
    "landscape",
    "landscape-left",
    "landscape-right"
];

export default (props) => {

    const { isOpen, close, confirm, cancel, title, message, settings, customStyle } = props;
    const { type, textConfirm, textCancel, bottomSheetHeight, useNativeDriver } = props.settings;
    const [visible, setVisible] = useState(isOpen)

    const valueXY = new Animated.ValueXY({ x: 0, y: bottomSheetHeight ? bottomSheetHeight : 180 })

    // GET PROPS AND CHANGE STATE VISIBLE
    useEffect(() => {
        setVisible(isOpen)
    }, [isOpen])

    // OPEN ANIMATION
    useEffect(() => {
        Animated.timing(valueXY, {
            toValue: { x: 0, y: 0 },
            duration: 280,
            friction: 4,
            useNativeDriver: useNativeDriver ? useNativeDriver : false
        }).start();
    }, [visible])

    // CLOSE ANIMATION 
    function closeModal(value) {
        Animated.timing(valueXY, {
            toValue: { x: 0, y: bottomSheetHeight ? bottomSheetHeight : 180 },
            duration: 280,
            friction: 4,
            useNativeDriver: useNativeDriver ? useNativeDriver : false
        }).start(() => { value == 'confirm' ? confirm() : cancel() })
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            supportedOrientations={SUPPORTED_ORIENTATIONS}
        >
            <TouchableOpacity activeOpacity={1} style={styles.BackgroundMask}>
                <Animated.View style={[styles.container, customStyle ? customStyle.container : null, { height: bottomSheetHeight ? bottomSheetHeight : 180 }, { transform: valueXY.getTranslateTransform() }]}>
                    
                    <Text style={[styles.title, customStyle ? customStyle.title : null]}>{title}</Text>
                    <Text style={[styles.message, customStyle ? customStyle.message : null]}>{message}</Text>

                    <View style={styles.containerButtons}>
                        {textCancel && (
                            <TouchableOpacity style={[styles.button, styles.buttonCancel, customStyle ? customStyle.buttonCancel : null]} onPress={() => closeModal('cancel')}>
                                <Text style={[styles.textButton, styles.textButtonCancel, customStyle ? customStyle.textButtonCancel : null]}>{textCancel}</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity style={[styles.button, styles.buttonConfirm, customStyle ? customStyle.buttonConfirm : null]} onPress={() => closeModal('confirm')}>
                            <Text style={[styles.textButton, styles.textButtonConfirm, customStyle ? customStyle.textButtonConfirm : null]}>{textConfirm ? textConfirm : 'OK'}</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </Modal>
    );
};
