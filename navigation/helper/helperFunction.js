import { showMessage } from "react-native-flash-message";
import Geolocation from 'react-native-geolocation-service'
import { PermissionsAndroid, Platform } from 'react-native'


export const getCurrentLocation = () => new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            position => {
                const cords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    heading: position?.coords?.heading
                };
                console.log("cords++++",position)
                resolve(cords);
               
            },
            error => {
                reject(error.message);

            },
            { enableHighAccuracy: true,},
        )
    })



export const locationPermission = () => new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
        try {
            const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
            if (permissionStatus === 'granted') {
                return resolve('granted')
            }
            reject('permission not granted')
        } catch (error) {
            return reject(error)

        }
    }

    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            resolve("granted");
        }
        return reject('Location Permission denied');
    }).catch((error) => {
        console.log('Ask Location permission error:', error)
        return reject(error)
    })

})

const showError = (message) => {
    showMessage({
        message,
        type: "danger",
        icon: "danger",
    })

}
const showSuccess = (message) => {
    showMessage({
        message,
        type: "success",
        icon: "success",
    })

}

export {
    showError,
    showSuccess
}