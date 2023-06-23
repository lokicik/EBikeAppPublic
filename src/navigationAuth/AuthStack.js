import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../Screens/Auth/LoginScreen'
import SignUpScreen from '../Screens/Auth/SignUpScreen'
import ResetPasswordScreen from '../Screens/Auth/ResetPasswordScreen'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const BottomTabStack = () => {
    return (
        <Tab.Navigator   initialRouteName='LoginScreen' tabBarOptions={{
            activeTintColor:'#f00',
            inactiveTintColor:'#333',
            style:{
                height:70,
                backgroundColor:'#333',
                padding:10,
            },
            labelStyle:{
                textAlign:'center',
                fontSize:18

            }
        }}   >
            <Tab.Screen  name="LoginScreen" component={LoginScreen} options={{
                tabBarLabel: 'Login',
                tabBarIcon:({color, size}) => 
                <Icon name='user-check' color={color} size={size}/>
            }} />
            <Tab.Screen  name="SignUpScreen" component={SignUpScreen} options={{
                tabBarLabel: 'Sign Up',
                tabBarIcon:({color, size}) => 
                <Icon name='user-plus' color={color} size={size}/>
            }} />
            <Tab.Screen  name="ResetPasswordScreen" component={ResetPasswordScreen} options={{
                tabBarLabel: 'Reset Password',
                tabBarIcon:({color, size}) => 
                <Icon name='key' color={color} size={size}/>
            }} />
        </Tab.Navigator>


    )}



const AuthStack = () => {
  return (
    <Stack.Navigator   initialRouteName='' >
        <Stack.Screen  name='Bottom Tab Stack' component={BottomTabStack} options={{
            headerShown:false,
        }}/>
    </Stack.Navigator>

  )
}

export default AuthStack