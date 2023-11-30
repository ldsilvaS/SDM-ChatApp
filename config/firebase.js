import {initializeApp} from 'firebase/app'
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage'
import {getFirestore} from 'firebase/firestore'

// Config do Firebase

const firebaseConfig = {
    apiKey: "AIzaSyAVu2Tl4rYKKVjV_MyT8eU-g-s53ejvALU",
    authDomain: "chatexpress-4db76.firebaseapp.com",
    projectId: "chatexpress-4db76",
    storageBucket: "chatexpress-4db76.appspot.com",
    messagingSenderId: "1032030260134",
    appId: "1:1032030260134:web:5dd9149037866e3ae9dd67"
};

// Inicializando o Firebase

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const database = getFirestore(app);


export{auth, database}