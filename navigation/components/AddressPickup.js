import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from '../constants/googleApi'



const AddressPickup = ({
  placeholderText,
  fetchAddress
}) => {
  const onPressAddress = (data, details) => {
    console.log("detailss===>>>>>", details)



    // !!!Şehir isimlendirme  ve sınıflandırma için yazılan kodlar 'Error while updating property coordinate of a view managed by: AIRMapMarker' hatası veriyo ya düzeltin ya da hiç karışmayın !!!



    // let resLength = details.address_components
    // let zipCode = ''

    // let filtersResCity = details.address_components.filter(val => {
    //   if (val.types.includes('locality') || val.types.includes('sublocality')) {
    //     return val
    //   }
    //   if (val.types.includes('postal_code')) {
    //     let postalCode = val.long_name
    //     zipCode = postalCode
    //   }
    //   return false
    // })

    // let dataTextCityObj = filtersResCity.length > 0
    //   ? filtersResCity[0]
    //   : details.address_components[resLength > 1 ? resLength - 2 : resLength - 1];

    // let cityText = dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17 ? dataTextCityObj.short_name : dataTextCityObj.long_name

    // console.log("zip cod found ", zipCode)
    // console.log("city name => ", cityText)

    const lat = details.geometry.location.lat
    const lng = details.geometry.location.lng
    console.log('adresslerLAT ==>>',lat)
    console.log('adresslerLET ==>>',lng)
    fetchAddress(lat, lng)
  }
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        onPress={onPressAddress}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
        textInputProps={{placeholderTextColor:'green'}}
        
        styles={{
          textInputContainer: styles.containerStyle,
          textInput: styles.textInputStyle,
          
        }}
        renderRow={(rowData) => {
          const title = rowData.structured_formatting.main_text;
          const address = rowData.structured_formatting.secondary_text;
          return (
            <View
              style={{
                
                flex: 1,
                height: '100%',
              }}>
              <Text style={{fontSize: 14,color:'green'}}>{title}</Text>
              <Text style={{fontSize: 14,color:'brown'}}>{address}</Text>
            </View>
          );
        }}
      />
    </View>
  )
}

export default AddressPickup

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: 'white'
  },
  textInputStyle: {
    height: 48,
    color: 'black',
    fontSize: 16,
    backgroundColor: '#F3F3F3',
    

  }

})