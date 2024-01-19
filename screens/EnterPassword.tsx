import React, {useEffect, useState} from "react";
import {View, Text, KeyboardAvoidingView, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity, Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import {FirebaseError} from "firebase/app";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {EditorParams} from "../App";

// This or useRoute()?
interface EnterPasswordProps {
  route: any;
}

export default function EnterPassword({route}: EnterPasswordProps) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {email} = route.params;

  const navigation = useNavigation<NativeStackNavigationProp<EditorParams>>();

  const forgotPassword = async () => {
    // Will add code here when we cover forgot password functionality....
  };

  const SignIn = async () => {};

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput value={password} style={styles.input} secureTextEntry={true} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} />
        {loading ? (
          <ActivityIndicator size="large" color="#0000f" />
        ) : (
          <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={SignIn} style={styles.loginButton}>
              <Text>Proceed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={forgotPassword} style={styles.button}>
              <Text>Forgot password?</Text>
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
  button: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 10,
    alignItems: "center",
    backgroundColor: "#fffff",
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
  loginButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 10,
    alignItems: "center",
    backgroundColor: "#66CFF4",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
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
  loginText: {
    fontSize: 10,
  },
  googleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
});
