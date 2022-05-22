/* eslint-disable prettier/prettier */
import React from 'react';
import Routes from './Routes';
import { AuthProvider } from './AuthProvider';

const AppNavigation = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};

export default AppNavigation;
