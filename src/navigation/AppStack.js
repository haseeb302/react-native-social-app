/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, TouchableOpacity, Text } from "react-native";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddPostScreen from "../screens/AddPostScreen";
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Fakebook" component={HomeScreen} options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#2e64e5',
                    fontSize: 18,
                },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                },
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>
                        <FontAwesome5.Button
                            name="plus"
                            size={22}
                            backgroundColor="#fff"
                            color="#2e64e5"
                            onPress={() => navigation.navigate("AddPost")}
                        />
                    </View>
                ),
            }} />
            <Stack.Screen name="AddPost" component={AddPostScreen} options={{
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#2e64e515',
                    shadowColor: '#2e64e515',
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Ionicons
                            name="arrow-back"
                            size={25}
                            color="#2e64e5"
                        />
                    </View>
                ),
            }} />
        </Stack.Navigator>
    );
};

export default function AppStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#2e64e5',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={FeedStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="chatbox-ellipses-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};