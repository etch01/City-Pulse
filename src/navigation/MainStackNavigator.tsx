import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TokenCtx } from "../screens/Auth/token";
import { Home, EventDetailsScreen } from "../screens";
import { Event } from "../redux/interfaces/events";

export type MainStackNavigatorParams = {
    Home: undefined;
    EventDetails: { event: Event };
};
  
const Stack = createNativeStackNavigator<MainStackNavigatorParams>();

function MainStackNavigator(){
    const tokenCtx = useContext(TokenCtx);

    return (
       <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen as any} />
       </Stack.Navigator>
    )
}

export default MainStackNavigator;