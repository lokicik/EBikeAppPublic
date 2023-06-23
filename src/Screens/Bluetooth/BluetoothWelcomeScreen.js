import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'


const BluetoothWelcomeScreen = (navigation) => {
  return (
    <SafeAreaView>
      <Text>BluetoothWelcomeScreen</Text>
      <Button onPress={navigation.navigate("BluetoothSearchScreen")}>ADD DEVICE</Button>
    </SafeAreaView>
  )
}

export default BluetoothWelcomeScreen