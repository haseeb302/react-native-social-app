/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {

    const [isFirstLaunch, setFirstLaunch] = useState(null);
    let routeName;
    useEffect(() => {
        AsyncStorage.getItem('isOnboarded').then((value) => {
            if (value === null) {
                AsyncStorage.setItem('isOnboarded', 'true');
                setFirstLaunch(true);
            }
            else {
                setFirstLaunch(false);
            }
        });
        GoogleSignin.configure({
            webClientId: '45771990482-7dgusvfbg7pk488u7pv8tu6147v8tjsd.apps.googleusercontent.com',
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    }
    else if (isFirstLaunch === true) {
        routeName = 'OnBoarding';
    }
    else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen name="onBoarding" component={OnBoardingScreen} options={{ header: () => null }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={({ navigation }) => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                },
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <FontAwesome.Button name='long-arrow-left' size={25} backgroundColor="#f9fafd" color="#333"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                )
            })} />
        </Stack.Navigator>
    );

};

export default AuthStack;
