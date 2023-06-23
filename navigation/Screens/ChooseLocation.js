import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GOOGLE_MAP_KEY } from '../constants/googleApi'
import { useNavigation } from '@react-navigation/native'

import AddressPickup from '../components/AddressPickup'
import CustomBtn from '../components/CustomBtn'
import { ScrollView } from 'react-native-gesture-handler'
import { showError, showSuccess } from '../helper/helperFunction'





const ChooseLocation = (props) => {
  const navigation = useNavigation()

const [state, setState] = useState({
    // pickupCords: {},
    destinationCords: {}
  })


// add pickupCords (video:5, zaman:16.55 te kaldırıldı diğer yorumları kaldırınca bunuda ekleyin)
  const {destinationCords} = state
  
  const onDone = () => {
    const isValid = checkValid()
    console.log("is VAlid...???",isValid)
    // pickupCords,
    props.route.params.getCordinates({
      destinationCords
    })
    showSuccess("you can back now")
    navigation.goBack()
  }



  






  const checkValid = () => {
    // if(Object.keys(pickupCords).length === 0){
    //   showError('Please enter your pickup Location')
    //   return false
    // }
    if(Object.keys(destinationCords).length === 0){
      showError('Please enter your desintation Location')
      return false
    }
    return true
  }

  // const fetchAddressCords = (lat, lng) => {
  //   console.log("latitude:", lat)
  //   console.log("longtude:", lng)
  //   setState({
  //     ...state, pickupCords: {
  //       latitude: lat,
  //       longitude: lng
  //     }
  //   })
  // }
  const fetchDestinationCords = (lat, lng) => {
    console.log("latitude:", lat)
    console.log("longtude:", lng)
    setState({
      ...state, destinationCords: {
        latitude: lat,
        longitude: lng
      }
    })
  }
  console.log("props  ===>>>",props)
  // console.log("pickup cords===>>>",pickupCords)
  // console.log("desintation cords===>>>",desintationCords)

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={{ backgroundColor: 'white', flex: 1, padding: 24 }} ü
      >

        {/* <AddressPickup
          placeholderText="Kişinin alınacağı yer"
          fetchAddress={fetchAddressCords}
        /> */}
        <View style={{ marginBottom: 16 }} />
        <AddressPickup
          placeholderText="Kişinin bırakılacağı yer"
          fetchAddress={fetchDestinationCords}
        />
        <CustomBtn
          btnText="Done"
          BtnStyle={{ marginTop: 24 }}
          onpress={onDone}
        />
      </ScrollView>
    </View>
  )
}

export default ChooseLocation

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})
