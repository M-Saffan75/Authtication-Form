/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import firebase from "firebase/app";
import "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyC3_lu8CjMVu6_ulmWS28j_vQxpu_mbdzs",
    authDomain: "authentication-a6f27.firebaseapp.com",
    projectId: "authentication-a6f27",
    storageBucket: "authentication-a6f27.appspot.com",
    messagingSenderId: "834956636680",
    appId: "1:834956636680:web:5b82b2059d329b7f14d7bd"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <NavigationContainer >

      {isLoggedIn ? <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> :

        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
