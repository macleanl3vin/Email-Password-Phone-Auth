// App.tsx
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import PhoneNumberVerification from "./screens/PhoneNumberVerification";
import Dashboard from "./screens/Dashboard";
import AwaitEmailVerification from "./screens/awaitEmailVerification";

export type EditorParams = {
  SignUpScreen: undefined;
  AwaitEmailVerification: {
    userEmail: string;
    userPassword: string;
    fullPhone: string;
  };
  PhoneNumberVerification: {
    email: string;
    phone: string;
  };
  LoginScreen: undefined;
  EnterPassword: {
    email: string;
  };
  SignInWithPhone: {
    confirmationCred: string;
  };
  Dashboard:
    | {
        currentEmail: string | null;
      }
    | undefined;
};

const Stack = createNativeStackNavigator<EditorParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}} />
        {/* <Stack.Screen name="AwaitEmailVerification" component={AwaitEmailVerification} options={{headerShown: false}} /> */}
        <Stack.Screen name="PhoneNumberVerification" component={PhoneNumberVerification} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
