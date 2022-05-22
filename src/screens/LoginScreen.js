/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';

import CustomInput from '../components/Inputs/CustomInput';
import FormButton from '../components/Buttons/FormButton';
import SocialButton from '../components/Buttons/SocialButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { AuthContext } from '../navigation/AuthProvider';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login, googleLogin } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/rn-social-logo.png')} style={styles.logo} />
            <Text style={styles.text}>Fakebook</Text>
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
            <FormButton title="Sign In" onPress={() => login(email, password)} activeOpacity={0.8} />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        title="Sign In With Facebook"
                        iconName="facebook"
                        color="#4867aa"
                        bgColor="#e6eaf4"
                        onPress={() => { }}
                    />

                    <SocialButton
                        title="Sign In With Google"
                        iconName="google"
                        color="#de4d41"
                        bgColor="#f5e7ea"
                        onPress={() => googleLogin()}
                    />
                </View>
            ) : null}

            <TouchableOpacity style={styles.forgotButton} onPress={() => { navigation.navigate('Signup') }}>
                <Text style={styles.navButtonText}>Don't have an account? Create Now!</Text>
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
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
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
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});
