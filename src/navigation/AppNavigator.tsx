import React, { useContext, useEffect } from "react";
import { BackHandler, Platform, Text } from "react-native";
import {
  createNavigationContainerRef,
  NavigationContainer,
  NavigationState,
  PartialState,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TokenCtx } from "../screens/Auth/token";
import AuthStackNavigator from "./AuthStackNavigator";
import MainStackNavigator from "./MainStackNavigator";


export type AppParams = {
    AuthNavigator: undefined;
    MainNavigator: undefined;
};

const Stack = createNativeStackNavigator<AppParams>();

function AppStack() {
 const  { token }  = useContext(TokenCtx);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {token ? (
        <Stack.Screen name="MainNavigator" component={MainStackNavigator} />
      ) : (
        <Stack.Screen name="AuthNavigator" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
}

type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer<AppParams>>
>;

const exitRoutes: string[] = ["AuthNavigator"];

export const navigationRef = createNavigationContainerRef<AppParams>();

export function AppNavigator(props: NavigationProps) {

  const handleBackPress = () =>{
    // ignore if iOS ... no back button!
    if (Platform.OS === "ios") return;

        const onBackPress = ():boolean => {
          if (!navigationRef.isReady()) return false;
          // grab the current route
          let routeName: string | undefined = undefined;
          let state: NavigationState | PartialState<NavigationState> = navigationRef.getRootState();
          while (!routeName) {
            if (!state.index) {
              routeName = "";
            } else {
              const route = state.routes[state.index] as any;
  
              // Found the active route -- return the name
              if (!route.state) routeName = route.name;
              // Recursive call to deal with nested routers
              else state = route.state;
            }
          }
  
          // are we allowed to exit?
          if (exitRoutes.includes(routeName)) {
            // exit and let the system know we've handled the event
            BackHandler.exitApp();
            return true;
          }
  
          // we can't exit, so let's turn this into a back action
          if (navigationRef.canGoBack()) {
            navigationRef.goBack();
            return true;
          }
  
          return false;
        };
  
        // Subscribe when we come to life
        BackHandler.addEventListener("hardwareBackPress", onBackPress);
  
        // Unsubscribe when we're done
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }

  React.useEffect(() => {
    handleBackPress();
  }, []);
  

  return (
    <NavigationContainer  {...props} ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
}