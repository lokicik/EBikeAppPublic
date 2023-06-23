import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions, Platform, Image, SafeAreaView } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import React, { componenet, useState, useRef, useEffect } from 'react'
import { GOOGLE_MAP_KEY } from '../constants/googleApi'
import MapViewDirections from 'react-native-maps-directions';
import imagesPath from '../constants/imagesPath';
import { locationPermission, getCurrentLocation } from '../helper/helperFunction';
import Loader from '../components/Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';


const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



const MapScreen = ({ navigation }) => {

  useEffect(() => {
    getLiveLocation()
  }, [])

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission()
    if (locPermissionDenied) {
      const { latitude, longitude, heading } = await getCurrentLocation()
      console.log("get live location after 4 second", heading)
      animate(latitude, longitude);
      setState({
        ...state,
        heading: heading,
        curLoc: { latitude, longitude },
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        })
      })

    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation()

    }, 600000);
    return () => clearInterval(interval)
  })


  const mapRef = useRef()
  const markerRef = useRef()

  const [state, setState] = useState(
    {
      curLoc: {
        latitude: 39.9282,
        longitude: 32.8597,

      },
      destinationCords: {

      },
      isLoading: false,
      coordinate: new AnimatedRegion({
        latitude: 39.9282,
        longitude: 32.8597,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }),
      time: 0,
      distance: 0,
      heading: 0


    }
  )

  const { curLoc, time, distance, destinationCords, isLoading, coordinate, heading } = state
  onPressLocation = () => {
    navigation.navigate('chooseLocation', { getCordinates: fetchValues })
  }

  const fetchValues = (data) => {
    console.log("this is data", data)

    setState({
      ...state,
      // curLoc: {
      //   latitude: data.pickupCords.latitude,
      //   longitude: data.pickupCords.longitude,
      // },
      destinationCords: {
        latitude: data.destinationCords.latitude,
        longitude: data.destinationCords.longitude,
      },
    })



    console.log("data ====>>>>", data)
  }

  const animate = (latitude, longitude) => {
    const newCoordinate = { latitude, longitude };
    if (Platform.OS == 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      curLoc.timing(newCoordinate).start();
    }
  }

  const onCenter = () => {
    mapRef.current.animateToRegion({
      latitude: curLoc.latitude,
      longitude: curLoc.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    })
  }

  const fetchTime = (d, t) => {
    setState(state => ({
      ...state,
      distance: d,
      time: t
    }))

  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topCard} >
        {distance !== 0 && time !== 0 && (
          <View>
            <Text style={styles.bottomCardTextColor}>Time left: {time.toFixed(0)} min. </Text>
            <Text style={styles.bottomCardTextColor}>Distance left: {distance.toFixed(0)} km.</Text>
          </View>)}
      </View>
      <View style={{
        width: 38,
        borderRadius: 10,
        marginTop: 15,
        marginRight: 8,
        marginLeft: 10,
        backgroundColor: 'yellow',
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        opacity: 0.8,
        flexDirection: 'row'

      }}>
        <TouchableOpacity
          style={{}}
          onPress={() => { navigation.goBack() }
          }>

          <Ionicons name={'arrow-back'} size={38} color={'black'} />

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputStyle}
          onPress={onPressLocation}
        >
          <Text style={{ color: 'green' }}>Choose your location...</Text>
        </TouchableOpacity>

      </View>
      <View style={{ flex: 1, zIndex: 0 }}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            ...curLoc,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >

          <Marker.Animated
            ref={markerRef}
            coordinate={coordinate}

          >
            <Image
              source={imagesPath.isBike}
              style={{ height: 40, width: 30, opacity: 0.6, transform: [{ rotate: `${heading}deg` }] }}

            />
          </Marker.Animated>


          {Object.keys(destinationCords).length > 0 && (<Marker coordinate={destinationCords} image={imagesPath.isGreenMarker} />)}


          {Object.keys(destinationCords).length > 0 && (
            <MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              apikey={GOOGLE_MAP_KEY}
              strokeWidth={4}
              strokeColor="hotpink"
              optimizeWaypoints={true}
              onStart={(params) => {
                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
              onReady={result => {
                console.log(`Distance: ${result.distance} km`)
                console.log(`Duration: ${result.duration} min.`)
                fetchTime(result.distance, result.duration),

                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: 30,
                      bottom: 300,
                      left: 30,
                      top: 100
                    }
                  })
              }}
              onError={(errorMessage) => {
                // console.log('GOT AN ERROR');
              }}
            />)}
        </MapView>


        <TouchableOpacity style={{
          position: 'absolute',
          right: 0,
          bottom: 130
        }}

          onPress={onCenter}>
          <Image source={imagesPath.greenIndicator} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomCard} >
        {/* veri değer sonuçları */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth:2.5,
          borderStyle:'dashed'
          }}
           >
          {/* current Mile */}
          <View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-end', borderBottomWidth: 1, width: 80 }}>
              <Text style={{ fontSize: 25, color: 'black' }}>0.7</Text>
              <Text style={styles.bottomCardTextColor}>Mil</Text>

            </View>

            <View>

              <Text style={styles.bottomCardTextColor}>Current Mile</Text>
            </View>
          </View>

          {/* Rİdding Tİme */}
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', borderBottomWidth: 1, width: 80 }}>
              <Text style={{ fontSize: 25, color: 'black' }}>02:51</Text>
              <Text style={styles.bottomCardTextColor}>Min</Text>

            </View>

            <View>

              <Text style={styles.bottomCardTextColor}>Rİdding Time</Text>
            </View>
          </View>

          {/* Speed */}
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', borderBottomWidth: 1, width: 80 }}>
              <Text style={{ fontSize: 25, color: 'black' }}>15.9</Text>
              <Text style={styles.bottomCardTextColor}>Mil/h</Text>

            </View>

            <View>

              <Text style={styles.bottomCardTextColor}>Speed</Text>
            </View>
          </View>
        </View>

        {/* bootm card alt değerler */}
        {/* {distance !== 0 && time !== 0 && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', width: '35%' }}>
              <Text style={{ fontSize: 15, color: 'green' }}> Kalan Zaman:</Text>
              <Text style={{ fontSize: 20, color: 'black' }}>{time.toFixed(0)}</Text>
              <Text style={styles.bottomCardTextColor}>Min</Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', width: '35%' }}>
              <Text style={{ fontSize: 15, color: 'green' }}> Kalan Yol:</Text>
              <Text style={{ fontSize: 20, color: 'black' }}>{distance.toFixed(0)}</Text>
              <Text style={styles.bottomCardTextColor}>Mil</Text>

            </View>

          </View>)} */}

      </View>




      <Loader isLoading={isLoading} />

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  topCard: {
    position: 'absolute',
    top: 150,
    right: 10,
    zIndex: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#bbb',
    opacity: 0.8

  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ddd',

    width: '100%',
    paddingHorizontal: 40,
    paddingTop:20,
    paddingBottom:10,

    borderTopEndRadius: 150,
    borderTopStartRadius: 150,
    opacity: 0.8,
    
    
  },

  bottomCardTextColor: {
    color: 'green'
  },


  inputStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',

    justifyContent: 'center',
    marginLeft: 28,
    width: 250
  }

})

export default MapScreen