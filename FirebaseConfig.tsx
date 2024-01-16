// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
