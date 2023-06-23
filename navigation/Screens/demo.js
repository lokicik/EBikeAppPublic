import { View, Text, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { componenet, useState, useRef } from 'react'
import { GOOGLE_MAP_KEY } from '../constants/googleApi'
import MapViewDirections from 'react-native-maps-directions';

const App = () => {
  const [state, setState] = useState(
    {
      pickupCords: {
        latitude: 30.7046,
        longitude: 76.71179,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      dropLocationCords: {
        latitude: 30.7333,
        longitude: 76.7794,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }

    }
  )
  const mapRef = useRef()
  const { pickupCords, dropLocationCords } = state
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={pickupCords}
      >

        <Marker coordinate={pickupCords} />
        <Marker coordinate={dropLocationCords} />
        <MapViewDirections
          origin={pickupCords}
          destination={dropLocationCords}
          apikey={GOOGLE_MAP_KEY}
          strokeWidth={4}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={result => {
            console.log(`Distance: ${result.distance} km`)
            console.log(`Duration: ${result.duration} min.`)

            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100
              }
            })
          }}
        />
      </MapView>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

})

export default App