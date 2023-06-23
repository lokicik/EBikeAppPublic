import { View, Text,Button } from 'react-native'
import React from 'react'

const DenemScreen = () => {
  return (
    <View>
      <Button title="Settings" onPress={() => navigation.navigate('SettingsScreen')}/>
    </View>
  )
}

export default DenemScreen