/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

import CustomInput from '../components/Inputs/CustomInput';
import FormButton from '../components/Buttons/FormButton';
import SocialButton from '../components/Buttons/SocialButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../navigation/AuthProvider';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const { register } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Account</Text>
            <CustomInput
                onChangeText={(userEmail) => setEmail(userEmail)}
                label={email}
                placeholder="Email"
                iconName="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <CustomInput
                onChangeText={(userPassword) => setPassword(userPassword)}
                label={password}
                placeholder="Password"
                iconName="lock"
                secureTextEntry={true}
            />
            <CustomInput
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                label={confirmPassword}
                placeholder="Confirm Password"
                iconName="lock"
                secureTextEntry={true}
            />
            <FormButton title="Sign Up" onPress={() => register(email, password)} activeOpacity={0.8} />

            <View style={styles.textPrivate}>
                <Text style={styles.colorTextPrivate}>
                    By registering, you confirm that you accept our
                </Text>
                <TouchableOpacity>
                    <Text style={[styles.colorTextPrivate, { color: '#e88832' }]}>
                        Terms of service
                    </Text>
                </TouchableOpacity>
                <Text> and </Text>
                <Text style={[styles.colorTextPrivate, { color: '#e88832' }]}>
                    Privacy Policy
                </Text>
            </View>
            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        title="Sign Up With Facebook"
                        iconName="facebook"
                        color="#4867aa"
                        bgColor="#e6eaf4"
                        onPress={() => { }}
                    />
                    <SocialButton
                        title="Sign Up With Google"
                        iconName="google"
                        color="#de4d41"
                        bgColor="#f5e7ea"
                        onPress={() => { }}
                    />
                </View>
            ) : null}

            <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('Signup') }}>
                <Text style={styles.navButtonText}>Already have an account? Sign In!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    colorTextPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
    },
});
