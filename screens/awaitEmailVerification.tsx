// awaitEmailVerification.tsx
import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";

import {useNavigation} from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

import {EditorParams} from "../App";

interface AwaitEmailVerificationProps {
  route: any;
}

export default function AwaitEmailVerification({route}: AwaitEmailVerificationProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<EditorParams>>();

  const {userEmail, fullPhone} = route.params;
  const [emailVerified, setEmailVerified] = useState(false);
  const [shouldContinueLoop, setShouldContinueLoop] = useState(true);

  // Code will go here

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Check your email for verification. Press next if verified.</Text>
      {loading ? <ActivityIndicator size="large" color="#0000f" /> : <View style={styles.ButtonContainer}></View>}
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
  text: {
    marginVertical: 4,
    height: 50,
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
  button: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  ButtonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 15,
    paddingHorizontal: 20,
  },
});
