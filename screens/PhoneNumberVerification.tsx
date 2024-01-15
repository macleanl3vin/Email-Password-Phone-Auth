// PhoneNumberVerification.tsx
import React, {useState} from "react";
import {View, Text, KeyboardAvoidingView, TextInput, ActivityIndicator, TouchableOpacity, StyleSheet} from "react-native";

import {useNavigation} from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import {collection, doc, getFirestore, setDoc} from "firebase/firestore";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

import {FIREBASE_APP} from "../FirebaseConfig";
import {EditorParams} from "../App";

interface PhoneNumberVerificationProps {
  route: any;
}

export default function PhoneNumberVerification({route}: PhoneNumberVerificationProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const {email, phone} = route.params;
  const user = auth().currentUser;

  const db = getFirestore(FIREBASE_APP);
  const navigation = useNavigation<NativeStackNavigationProp<EditorParams>>();

  const sendVerificaitonCode = async () => {};

  const handleCodeConfirmation = async () => {};

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput value={verificationCode} style={styles.input} placeholder="Verification code" autoCapitalize="none" onChangeText={(text) => setVerificationCode(text)} />
        {loading ? (
          <ActivityIndicator size="large" color="#0000f" />
        ) : (
          <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={handleCodeConfirmation} style={styles.signupButton} disabled={loading}>
              <Text>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={sendVerificaitonCode} style={styles.signupButton} disabled={loading}>
              <Text>Send Verification</Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#ffffff",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
  },
  ButtonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 15,
    paddingHorizontal: 20,
  },
  signupButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 10,
    alignItems: "center",
    backgroundColor: "#FFAF37",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
});
