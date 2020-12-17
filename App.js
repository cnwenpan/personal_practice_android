import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NativeRouter} from 'react-router-native'
import {Navigation, Card} from 'react-router-navigation'

import Home from './src/pages/Home/index.js'

export default function App() {
    return (
        <NativeRouter>
            <Navigation>
                <Card exact path="/" render={() => <Home/>}/>
            </Navigation>
        </NativeRouter>
    );
}
