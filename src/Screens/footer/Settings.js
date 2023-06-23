import { View, Text } from 'react-native'
import React from 'react'

const Settings = ({navigation}) => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Settings Home" component={SettingsDetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile Details" component={Details} options={{ headerShown: false }} />
        </Stack.Navigator>
      );
}

export default Settings