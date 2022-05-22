/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

import { windowHeight } from '../../utils/Dimensions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({ title, iconName, color, bgColor, ...props }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: bgColor }]} {...props}>
            <View style={styles.iconWrapper}>
                <FontAwesome style={styles.icon} name={iconName} size={24} color={color} />
            </View>
            <View style={styles.buttonTextWrapper}>
                <Text style={[styles.title, { color: color }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    buttonTextWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
