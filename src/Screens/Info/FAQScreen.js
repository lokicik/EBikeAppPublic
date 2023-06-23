import { View, Text, Button } from 'react-native'
import React from 'react'

const FAQScreen = ({navigation}) => {
  return (
    <View>
      <Text>FAQScreen</Text>
      <Button title="Go back" onPress={() => {navigation.navigate('Setting')}}   />
    </View>
  )
}

export default FAQScreen