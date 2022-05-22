/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


export default function OnBoardingScreen ({navigation}) {
    return (
        <Onboarding
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: "#a6e4d0",
                    image: <Image source={require('../../assets/onboarding-img1.png')} />,
                    title: "Connect to the world",
                    subtitle: "Another way to connect with the world"
                },
                {
                    backgroundColor: "#fdeb93",
                    image: <Image source={require('../../assets/onboarding-img2.png')} />,
                    title: "Share your thoughts",
                    subtitle: "Connect with the like minded"
                },
                {
                    backgroundColor: "#e9bcbe",
                    image: <Image source={require('../../assets/onboarding-img3.png')} />,
                    title: "Be a creator",
                    subtitle: "You are unique, and a creator"
                }
            ]}
        />
    );
}
