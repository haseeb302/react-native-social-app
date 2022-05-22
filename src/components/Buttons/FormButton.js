/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { windowHeight } from '../../utils/Dimensions';

const FormButton = ({ title, ...props }) => {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: windowHeight / 15,
        marginTop: 10,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
    }
})