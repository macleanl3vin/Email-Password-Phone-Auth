// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
