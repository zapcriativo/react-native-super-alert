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

    const { isOpen, close, confirm, cancel, title, message, settings } = props;
    const { type, textConfirm, textCancel, useNativeDriver, position } = props.settings;
    const [visible, setVisible] = useState(isOpen)

    const springValue = new Animated.Value(0);

    // STATES FROM EDGES ANIMATION
    const [valueXY, setValueXY] = useState(new Animated.ValueXY({ x: 0, y: 0 }))
    const [valueEnd, setvalueEnd] = useState({ x: 0, y: 0 })
    const [valueStart, setvalueStart] = useState({ x: 0, y: 0 })
    const [justifyContent, setjustifyContent] = useState('')

    useEffect(() => {
        if (position) {
            switch (position) {
                case 'top':
                    setjustifyContent('flex-start')
                    setValueXY(new Animated.ValueXY({ x: 0, y: -120 }))
                    setvalueEnd({ x: 0, y: 40 })
                    setvalueStart({ x: 0, y: -120 })
                    break;
                case 'right':
                    setjustifyContent('center')
                    setValueXY(new Animated.ValueXY({ x: windowWidth, y: 0 }))
                    setvalueEnd({ x: 0, y: 0 })
                    setvalueStart({ x: windowWidth, y: 0 })
                    break;
                case 'bottom':
                    setjustifyContent('flex-end')
                    setValueXY(new Animated.ValueXY({ x: 0, y: 120 }))
                    setvalueEnd({ x: 0, y: -40 })
                    setvalueStart({ x: 0, y: 120 })
                    break;
                case 'left':
                    setjustifyContent('center')
                    setValueXY(new Animated.ValueXY({ x: -windowWidth, y: 0 }))
                    setvalueEnd({ x: 0, y: 0 })
                    setvalueStart({ x: -windowWidth, y: 0 })
                    break;
                default:
                    break;
            }
        }
    }, [position])

    // GET PROPS AND CHANGE STATE VISIBLE
    useEffect(() => {
        setVisible(isOpen)
    }, [isOpen])

    // OPEN ANIMATION
    useEffect(() => {
        if (position) {
            Animated.timing(valueXY, {
                toValue: valueEnd,
                duration: 280,
                friction: 4,
                useNativeDriver: useNativeDriver ? useNativeDriver : false
            }).start();
        } else {
            Animated.spring(springValue, {
                toValue: 1,
                speed: 10,
                bounciness: 7,
                velocity: 5,
                useNativeDriver: false
            }).start();
        }
    }, [visible])

    // CLOSE ANIMATION 
    function closeModal(value) {
        if (position) {
            Animated.timing(valueXY, {
                toValue: valueStart,
                duration: 280,
                friction: 4,
                useNativeDriver: useNativeDriver ? useNativeDriver : false
            }).start(() => { value == 'confirm' ? confirm() : cancel() })
        } else {
            value == 'confirm' ? confirm() : cancel()
        }
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            supportedOrientations={SUPPORTED_ORIENTATIONS}
        >
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.BackgroundMask,
                {
                    justifyContent: position ? justifyContent : 'center',
                }
                ]}>
                <Animated.View style={[
                    styles.container,
                    { transform: position ? valueXY.getTranslateTransform() : [{ scale: springValue }] }
                ]}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>

                    <View style={styles.containerButtons}>
                        {textCancel && (
                            <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={() => closeModal('cancel')}>
                                <Text style={[styles.textButton, styles.textButtonCancel]}>{textCancel}</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity style={[styles.button, styles.buttonConfirm]} onPress={() => closeModal('confirm')}>
                            <Text style={[styles.textButton, styles.textButtonConfirm]}>{textConfirm ? textConfirm : 'OK'}</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </Modal>
    );
};
