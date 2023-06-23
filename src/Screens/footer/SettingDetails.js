import { View, Text, Button, Switch } from 'react-native'
import React from 'react'

const SettingDetails = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Welcome to Settings page!!!
          </Text>
          <Button
            onPress={() => navigation.navigate('Profile')}
            title="Go to Profile"
          />
          <Switch/>

          <Text>
            Dark Mode
          </Text>
          <Switch/>
          <Text>
            Language
          </Text>
          <Switch/>
          <Text>
            başka
          </Text>
          <Switch/>

        </View>
      );
}

export default SettingDetails