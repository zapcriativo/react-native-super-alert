import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Animated, Text, TouchableOpacity, Modal, View, Dimensions, PanResponder } from 'react-native';

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
    const { draggable, option, timeout, disableTimeout, TitleTextAlign, MessageTextAlign, textConfirm, textCancel, flashMessageHeight, useNativeDriver } = props.settings;
    const [visible, setVisible] = useState(isOpen)

    let ColorTheme = {
        success: {
            backgroundColor: '#168031'
        },
        warning: {
            backgroundColor: '#DB8739'
        },
        info: {
            backgroundColor: '#165193'
        },
        danger: {
            backgroundColor: '#b31c1c'
        }
    }

    let FlashTimeout

    const varflashMessageHeight = flashMessageHeight ? (-flashMessageHeight + (textCancel || textCancel ? -50 : 0)) : (-110 + (textCancel || textCancel ? -50 : 0))
    let valueXY = new Animated.Value(varflashMessageHeight)

    // GET PROPS AND CHANGE STATE VISIBLE
    useEffect(() => {
        setVisible(isOpen)
    }, [isOpen])


    // FUNCTION TO DRAGGABLE TO CLOSE FLASH MESSAGE
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => draggable ? draggable : true,
            onPanResponderMove: (event, gestureState) => {
                valueXY.setValue(Math.min(Math.max(gestureState.dy, varflashMessageHeight), 0))
            },
            onPanResponderRelease: (e, gesture) => {
                if (gesture.vy >= 0) return
                closeModal('close')
            }
        })
    ).current;

    // OPEN ANIMATION
    useEffect(() => {
        Animated.timing(valueXY, {
            toValue: 0,
            duration: 280,
            friction: 4,
            useNativeDriver: useNativeDriver ? useNativeDriver : false
        }).start(() => {
            if (disableTimeout != true) FlashTimeout = setTimeout(() => {
                closeModal('close')
            }, timeout ? timeout * 1000 : 5 * 1000);
        })
    }, [visible])

    function alerta() {
        console.log('call')
    }


    // CLOSE ANIMATION 
    function closeModal(value) {
        clearTimeout(FlashTimeout)
        Animated.timing(valueXY, {
            toValue: varflashMessageHeight,
            duration: 280,
            friction: 2,
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
        <Animated.View
            {...panResponder.panHandlers}
            style={[styles.container,
            customStyle ? customStyle.container : null,
            {
                backgroundColor: option ? ColorTheme[option].backgroundColor : customStyle.container.backgroundColor ? customStyle.container.backgroundColor : '#fff',
                height: varflashMessageHeight
            },
            { transform: [{ translateY: valueXY }] },
            ]}>

            {title != '' && (<Text style={[styles.title, {
                textAlign: TitleTextAlign ? TitleTextAlign : 'center',
                color: option ? '#fff' : customStyle.title.color ? customStyle.title.color : '#333'
            }]}>{title}</Text>)}

            <Text style={[styles.message, {
                textAlign: MessageTextAlign ? MessageTextAlign : 'center',
                color: option ? '#fff' : customStyle.message.color ? customStyle.message.color : '#666'
            }]}>{message}</Text>

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

    );
};
