import { View, Text } from 'react-native'
import React from 'react'
import AnaSayfa from '../Screens/homescreen';
import ProfileScreenPage from '../Screens/footer/ProfileScreenPage';
import Details from '../Screens/footer/Details';
import SettingDetails from '../Screens/footer/SettingDetails';
// import { NotificationsScreen } from './routes';
import MapScreen2 from '../Screens/MapScreen2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import IconFa from 'react-native-vector-icons/FontAwesome'
import ResetPasswordScreen from '../Screens/Auth/ResetPasswordScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import History from '../Screens/History';



const Tab = createBottomTabNavigator()
const TabNav = () => {
  return (
    <Tab.Navigator
    style={{ flex: 1 }}
    screenOptions={({ route }) => ({
      tabBarShowLabel: false, tabBarActiveTintColor: '#181618', tabBarStyle: {
        backgroundColor: '#2E8A59',
        borderRightColor: '#fff',
        bottom: 10,
        marginLeft: 10,
        marginRight: 10,
        elevation: 1,
        borderRadius: 50,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 90

      }, tabBarInactiveTintColor: '#FAF8FA',
      //        tabBarIcon: ({ focused, color, size }) => {
      //         let iconNameme;
      //          if (route.name === 'Map') {
      //            iconNameme = focused
      //              ? 'map-marker'
      //              : 'map-marker-outline';
      //          }
      //          return <IconMaC name={iconNameme} size={size} color={color} />;
      //        },


      tabBarIcon: ({ focused, color }) => {
        let iconName;
        if (route.name === 'Settings') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        }
        else if (route.name === 'AnaSayfa') {
          iconName = focused
            ? 'home'
            : 'home';


        }


        else if (route.name === 'Profile') {
          iconName = focused
            ? "person-circle-outline"
            : 'person-circle-sharp';
        }
        else if (route.name === 'SignUpScreen') {
          iconName = focused
            ? "person-add"
            : 'person-add-outline';
        }
        else if (route.name === 'ResetPasswordScreen') {
          iconName = focused
            ? "key"
            : 'key-outline';
        }
        else if (route.name === 'Notifications') {
          iconName = focused
            ? "notifications"
            : 'ios-notifications-outline';
        }
        else if (route.name === 'History') {
          iconName = focused
            ? "history"
            : 'history'
        }
        return <IconFa name={iconName} size={36} color={color} />;

      },
    })}
    options={{
      activeTintColor: '#f0f',
      inactiveTintColor: '#ff0',
    }}>
    <Tab.Screen name='AnaSayfa' component={AnaSayfa} options={{ headerShown: false }} />
    <Tab.Screen name='History' component={History} options={{ headerShown: false }} />
    {/* <Tab.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerShown: false }} />
      <Tab.Screen name='ResetPasswordScreen' component={ResetPasswordScreen} options={{ headerShown: false }} /> */}
    {/* <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false, tabBarBadge:31,tabBarBadgeStyle:{backgroundColor:'#f0f',top:25} }} /> */}
    {/* <Tab.Screen name='Map' component={MapScreen2} options={{
      headerShown: false, tabBarBadgeStyle: { backgroundColor: '#f0f', top: 25 },

    }} /> */}


  </Tab.Navigator>
  );
}

export default TabNav