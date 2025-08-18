import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TokenCtx } from "../screens/Auth/token";
import { Home } from "../screens";

export type MainStackNavigatorParams = {
    Home: undefined;
};
  
const Stack = createNativeStackNavigator<MainStackNavigatorParams>();

function MainStackNavigator(){
    const tokenCtx = useContext(TokenCtx);

    return (
       <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
       </Stack.Navigator>
    )
}

export default MainStackNavigator;