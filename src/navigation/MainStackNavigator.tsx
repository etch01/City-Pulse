import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TokenCtx } from "../screens/Auth/token";
import { Home, EventDetailsScreen, Profile } from "../screens";
import { Event } from "../redux/interfaces/events";

export type MainStackNavigatorParams = {
    Home: undefined;
    EventDetails: { event: Event };
    Profile: undefined;
};
  
const Stack = createNativeStackNavigator<MainStackNavigatorParams>();

function MainStackNavigator(){
    const tokenCtx = useContext(TokenCtx);

    return (
       <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen as any} />
            <Stack.Screen name="Profile" component={Profile} />
       </Stack.Navigator>
    )
}

export default MainStackNavigator;