import { View, Text, Button } from 'react-native'
import React from 'react'

const Personalinfo = ({navigation}) => {
  return (
    <View>
      <Text>Personalinfo</Text>
      <Button title="Go back" onPress={() => {navigation.navigate('Setting')}}   />
    </View>
  )
}

export default Personalinfo