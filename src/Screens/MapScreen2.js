import * as React from 'react'
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeNavigation from '../../navigation/Screens/HomeNavigation'
import ChooseLocation from '../../navigation/Screens/ChooseLocation'
import FlashMessage from 'react-native-flash-message';
const Stack = createStackNavigator()

const MapScreen2 = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeNavigation}  />
        <Stack.Screen name='chooseLocation' component={ChooseLocation}  />
      </Stack.Navigator>
      <FlashMessage
      position="top"
      />
    </NavigationContainer>
  )
}

export default MapScreen2