/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {

    const { user, setUser } = useContext(AuthContext); // getting user and setUser state from Auth context provider
    const [initialize, setInitialize] = useState(true); // keeping a state to check if connection is established with firebase

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onAuthStateChanged = (user) => {
        setUser(user);
        setInitialize(false);
    };

    useEffect(() => {
        const sub = auth().onAuthStateChanged(onAuthStateChanged);
        return sub;
    }, [onAuthStateChanged]);

    if (initialize === true) { return null; }

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;
