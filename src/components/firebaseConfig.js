

import app from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// const firebaseConfig = {
//   // firebase config bilgileri buraya girilir
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const db = firestore();

export default db;
