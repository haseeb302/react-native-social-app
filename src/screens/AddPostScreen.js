/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ActionButton from 'react-native-action-button';

import { InputContainer, InputField } from '../styles/AddPostStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const AddPostScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <InputContainer>
                <InputField placeholder="Share your thoughts.." multiline numberOfLines={4} />
            </InputContainer>
            <ActionButton buttonColor='rgba(231,76,60,1)'>
                <ActionButton.Item title='Take Photo' buttonColor='#9b59b6' onPress={() => { }}>
                    <Icon name='camera-outline' style={{ fontSize: 20, color: 'white', height: 22 }} />
                </ActionButton.Item>
                <ActionButton.Item title='Choose Photo' buttonColor='#3498db' onPress={() => { }}>
                    <Icon name='md-images-outline' style={{ fontSize: 20, color: 'white', height: 22 }} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
};

export default AddPostScreen;

const styles = StyleSheet.create({});