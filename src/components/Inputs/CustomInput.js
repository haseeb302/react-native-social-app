/* eslint-disable prettier/prettier */
import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../../utils/Dimensions';

const CustomInput = ({ label, placeholder, iconName, ...props }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.icon}>
                <AntDesign name={iconName} size={25} color="#666" />
            </View>
            <TextInput
                style={styles.input}
                value={label}
                placeholder={placeholder}
                numberOfLines={1}
                placeholderTextColor="#666"
                {...props}
            />
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    icon: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 1.5,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});