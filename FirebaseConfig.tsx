// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyDl9fNdPTySNrhAWcdAP4-hu2TGJ48ysk4",
  authDomain: "pudotest-ba3dd.firebaseapp.com",
  databaseURL: "https://pudotest-ba3dd-default-rtdb.firebaseio.com",
  projectId: "pudotest-ba3dd",
  storageBucket: "pudotest-ba3dd.appspot.com",
  messagingSenderId: "922269500321",
  appId: "1:922269500321:web:c527db7914e42a325b01e0",
  measurementId: "G-BYTWCS56K3",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
