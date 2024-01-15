// AuthenticationFunctions.tsx
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";
import "firebase/compat/auth";
import {QuerySnapshot, collection, getDocs, getFirestore, query, where} from "firebase/firestore";

// We will add functions as we walk through the guide.
