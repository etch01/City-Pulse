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

export function saveToken(token: string | undefined) {
  if (!token) {
    return AsyncStorage.removeItem("auth-token");
  }
  return AsyncStorage.setItem("auth-token", token);
}

export function retrieveToken() {
  return AsyncStorage.getItem("auth-token");
}