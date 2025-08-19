import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TokenCtxType = {
  token: string | undefined;
  setToken: (t: string) => void;
  unsetToken: () => void;
};

export const TokenCtx = createContext<TokenCtxType>({
  token: undefined,
  setToken: () => undefined,
  unsetToken: () => undefined,
});

//Best way to store token is not async storage ( for demo only ) but in react-native-keychain or encrypted storage
export async function saveToken(token: string | undefined) {
  if (!token) {
    return AsyncStorage.removeItem("auth-token");
  }
  return await AsyncStorage.setItem("auth-token", token);
}

export async function retrieveToken() {
  return await AsyncStorage.getItem("auth-token");
}

export async function removeToken() {
  return await AsyncStorage.removeItem("auth-token");
}