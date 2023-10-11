import {initializeApp} from 'firebase/app'
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage'
import {getFirestore} from 'firebase/firestore'
import { Constants } from 'expo-constants'

// Config do Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBuSbO6ar9Bq6qHp3iRqpWBbxiWLDxm29o",
    authDomain: "chatapp-c5076.firebaseapp.com",
    projectId: "chatapp-c5076",
    storageBucket: "chatapp-c5076.appspot.com",
    messagingSenderId: "2256471072",
    appId: "1:2256471072:web:b8e1362fdc4559e839a845"
};

// Inicializando o Firebase

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const database = getFirestore();