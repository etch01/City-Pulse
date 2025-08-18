import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens";

export type AuthNavigatorParams = {
    Login: undefined;
  };

const Stack = createNativeStackNavigator<AuthNavigatorParams>();

function AuthStackNavigator(){
     return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
        </Stack.Navigator>
     )
}

export default AuthStackNavigator;