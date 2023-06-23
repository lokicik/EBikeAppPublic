import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Button, SafeAreaView, Switch } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';


import styles from '../style'

import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconMaC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { DrawerContent } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from '../src/navigationAuth/AuthProvider';
import auth from '@react-native-firebase/auth';

import AnaSayfa from '../src/Screens/homescreen';
import FlashMessage from 'react-native-flash-message'
import CustomDrawer from '../src/components/CustomDrawer';
import MapScreen2 from '../src/Screens/MapScreen2';
import ResetPasswordScreen from '../src/Screens/Auth/ResetPasswordScreen';
import SignUpScreen from '../src/Screens/Auth/SignUpScreen';
import LoginScreen from '../src/Screens/Auth/LoginScreen';
import TabNav from '../src/components/TabNav';
import TabNavLogin from '../src/components/TabNavLogin';
import SettingScreen from '../src/Screens/DrawerMenu/SettingsScreen';
import ProfileScreen from '../src/Screens/ProfileScreen';
import NotificationsScreen from '../src/Screens/DrawerMenu/Notifications';
import HomeNavigation from '../navigation/Screens/HomeNavigation'
import ChooseLocation from '../navigation/Screens/ChooseLocation';
import Personalinfo from '../src/Screens/Info/Personalinfo';
import PermissionsScreen from '../src/Screens/Info/PermissionsScreen';
import FAQScreen from '../src/Screens/Info/FAQScreen';





const Tab = createBottomTabNavigator();
function HomeScreen({ navigation }) {

  return (
    <TabNav/>

  );
}

const Stack = createStackNavigator();
function SettingsScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings Home" component={SettingsDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile Details" component={Details} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function SettingsDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ top: 100 }}>
        <Text>
          Welcome to Settings page!!!
        </Text>
        <Button
          onPress={() => navigation.navigate('Profile')}
          title="Go to Profile"
        />
      </View>
      <View style={{ bottom: 150, right: 100 }}>
        <View style={{ flexDirection: 'column', left: 30 }}>

          <Switch style={{}} />
          <Switch />
          <Switch />

        </View>

        <View style={{ right: 30, bottom: 130 }}>
          <Text style={{ right: 30 }}>Dark Mode</Text>
          <Text style={{ right: 30, top: 30 }}>Language</Text>
          <Text style={{ right: 30, top: 60 }}>Preferences</Text>
        </View>
      </View>


    </View>
  );
}
function Details({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>sa</Text>
    </View>
  );
}

const MyDrawer = ({ navigation }) => {
  return (
    //  Custom drawer içerisine yol objesi üzerinden navigation gönderildi. 
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} yol={navigation} />} screenOptions={{
      headerShown: false, drawerLabelStyle: { marginLeft: -25, fontSize: 14 },
      drawerActiveTintColor: '#F9F8F9',
      drawerInactiveTintColor: '#333',
      drawerActiveBackgroundColor: '#2E8A59'
    }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
        drawerIcon: (focused) => (
          <IconMa name='home' size={24} color={'#181618'} />
        ),
      }} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{
        drawerIcon: (focused) => (
          <IconMa name='notifications' size={24} color={'#181618'} />
        ),
      }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{
        drawerIcon: (focused) => (
          <IconMa name='person' size={24} color={'#181618'} />
        ),
      }} />
      <Drawer.Screen name="Setting" component={SettingScreen} options={{
        drawerIcon: (focused) => (
          <IconMa name='settings' size={24} color={'#181618'} />
        ),
      }} />
      {/* <Drawer.Screen name="Map" component={MapScreen2} options={{
        drawerIcon: (focused) => (
          <IconMa name='map' size={24} color={'#181618'} />
        ),
      }} /> */}


    </Drawer.Navigator>
  )
}

const Drawer = createDrawerNavigator();
export default function Routes({ navigation }) {


  return (

    <NavigationContainer >

      <FlashMessage position='top' />
      <Stack.Navigator initialRouteName='LoginTab'>
        <Stack.Screen name='MyDrawer' component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name='LoginTab' component={TabNavLogin} options={{ headerShown: false }} />


        <Stack.Screen name='Welcome' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Notifications' component={NotificationsScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Custom' component={CustomDrawer} options={{ headerShown: false }} />
        <Stack.Screen name='Setting' component={SettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Map' component={MapScreen2} options={{ headerShown: false }} />
        <Stack.Screen name='NavHome' component={HomeNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='chooseLocation' component={ChooseLocation}  />
        <Stack.Screen name="Personalinfo" component={Personalinfo}/>
        <Stack.Screen name="Permissions" component={PermissionsScreen}/>
        <Stack.Screen name="FAQ" component={FAQScreen}/>
      </Stack.Navigator>

    </NavigationContainer>

  )
}
//language, change password, permissions, dark mode,