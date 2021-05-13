import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Animated, Easing, Text, TouchableOpacity, Modal, View } from 'react-native';

import styles from "./styles";

const SUPPORTED_ORIENTATIONS = [
    "portrait",
    "portrait-upside-down",
    "landscape",
    "landscape-left",
    "landscape-right"
];

export default (props) => {

    const { isOpen, close, confirm, cancel, title, message, settings } = props;
    const { type, textConfirm, textCancel, useNativeDriver, SlideFrom } = props.settings;
    const [visible, setVisible] = useState(isOpen)

    const springValue = new Animated.Value(0);

    // STATES FROM EDGES ANIMATION
    const [valueXY, setValueXY] = useState(new Animated.ValueXY({ x: 0, y: 0 }))
    const [valueEnd, setvalueEnd] = useState({ x: 0, y: 0 })
    const [valueStart, setvalueStart] = useState({ x: 0, y: 0 })
    const [justifyContent, setjustifyContent] = useState('')

    useEffect(() => {
        console.log('esse 1')

        switch (SlideFrom) {
            case 'top':
                setjustifyContent('flex-start')
                setValueXY(new Animated.ValueXY({ x: 0, y: -120 }))
                setvalueEnd({ x: 0, y: 40 })
                setvalueStart({ x: 0, y: -120 })
                break;
            case 'right':

                break;
            case 'bottom':
                setjustifyContent('flex-end')
                setValueXY(new Animated.ValueXY({ x: 0, y: 120 }))
                setvalueEnd({ x: 0, y: -40 })
                setvalueStart({ x: 0, y: 120 })
                break;
            case 'left':

                break;
            default:
                break;
        }
    },[SlideFrom])

    useEffect(() => {
        console.log('esse 2')

        setVisible(isOpen)
    }, [isOpen])

    // useEffect(() => {
    //     Animated.spring(springValue, {
    //         toValue: 1,
    //         speed: 10,
    //         bounciness: 7,
    //         velocity: 5,
    //         useNativeDriver: false
    //     }).start();
    // }, [visible])

    useEffect(() => {
        console.log('esse 3')
        console.log(valueXY)
        console.log(valueEnd)

        Animated.timing(valueXY, {
            toValue: valueEnd,
            duration: 280,
            friction: 4,
            useNativeDriver: useNativeDriver ? useNativeDriver : false
        }).start();
    }, [visible])

    function closeModal(value) {
        Animated.timing(valueXY, {
            toValue: valueStart,
            duration: 280,
            friction: 4,
            useNativeDriver: useNativeDriver ? useNativeDriver : false
        }).start(() => { value == 'confirm' ? confirm() : cancel() })
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="none"
            supportedOrientations={SUPPORTED_ORIENTATIONS}
        >
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.BackgroundMask, { justifyContent: SlideFrom == 'top' || 'bottom' ? justifyContent : '' }]}
            >
                <Animated.View style={[
                    styles.container,
                    { transform: valueXY.getTranslateTransform() }
                ]}>

                    {/* // { transform: [{ scale: springValue }] } */}


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
