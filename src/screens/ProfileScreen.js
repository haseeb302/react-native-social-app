/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import FormButton from '../components/Buttons/FormButton';

import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
            <FormButton title="Logout" onPress={() => logout()} />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
