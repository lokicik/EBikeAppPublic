import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'

const PermissionsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>PermissionsScreen</Text>
      <Button title="Go back" onPress={() => {navigation.navigate('Setting')}}   />
    </SafeAreaView>
  )
}

export default PermissionsScreen