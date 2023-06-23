import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../style';

const ProfileScreenPage = ({navigation}) => {
    return (
    
        <View style={styles.container} >
        
    
    
          <Text style={{ textAlign: 'center', justifyContent: 'center' }}>
            Welcome to Profile page!
          </Text>
    
    
    
        </View>
      );
}

export default ProfileScreenPage