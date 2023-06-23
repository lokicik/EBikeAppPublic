import 'react-native-gesture-handler'
import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './dagitici/routes'
import {AuthProvider} from './src/navigationAuth/AuthProvider';
import SecondRoutes from './dagitici/secondroutes'


const Stack = createNativeStackNavigator();



function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  )}
    

export default App;