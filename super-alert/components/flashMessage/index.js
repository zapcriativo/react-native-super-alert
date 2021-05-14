import React, { useState, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, Modal, View, Dimensions, } from 'react-native';

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
    const { flashMessageTimeout, TitleTextAlign, MessageTextAlign, textConfirm, textCancel, flashMessageHeight, useNativeDriver } = props.settings;
    const [visible, setVisible] = useState(isOpen)
    let FlashTimeout

    const varflashMessageHeight = flashMessageHeight ? (-flashMessageHeight + (textCancel || textCancel ? -50 : 0)) : (-110 + (textCancel || textCancel ? -50 : 0))
    const valueXY = new Animated.ValueXY({ x: 0, y: varflashMessageHeight })

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
        }).start(() => {
            if (flashMessageTimeout) FlashTimeout = setTimeout(() => {
                console.log('pingou no timeout')
                closeModal('close')
            }, flashMessageTimeout * 1000);
        })
    }, [visible])

    flashMessageTimeout

    // CLOSE ANIMATION 
    function closeModal(value) {
        clearTimeout(FlashTimeout)
        Animated.timing(valueXY, {
            toValue: { x: 0, y: varflashMessageHeight },
            duration: 280,
            friction: 4,
            useNativeDriver: useNativeDriver ? useNativeDriver : false
        }).start(() => {
            switch (value) {
                case 'confirm':
                    confirm()
                    break;
                case 'cancel':
                    cancel()
                    break;
                case 'close':
                    close()
                    break;
                default:
                    break;
            }
        })
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="none"
            supportedOrientations={SUPPORTED_ORIENTATIONS}
        >
            <TouchableOpacity activeOpacity={1} style={styles.BackgroundMask}>
                <Animated.View style={[styles.container, { height: varflashMessageHeight }, { transform: valueXY.getTranslateTransform() }]}>
                    {title != '' && (<Text style={[styles.title, { textAlign: TitleTextAlign ? TitleTextAlign : 'center' }]}>{title}</Text>)}
                    <Text style={[styles.message, { textAlign: MessageTextAlign ? MessageTextAlign : 'center' }]}>{message}</Text>
                    <View style={styles.containerButtons}>
                        {textCancel && (
                            <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={() => closeModal('cancel')}>
                                <Text style={[styles.textButton, styles.textButtonCancel]}>{textCancel}</Text>
                            </TouchableOpacity>
                        )}
                        {textConfirm && (
                            <TouchableOpacity style={[styles.button, styles.buttonConfirm]} onPress={() => closeModal('confirm')}>
                                <Text style={[styles.textButton, styles.textButtonConfirm]}>{textConfirm ? textConfirm : 'OK'}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </Modal>
    );
};
