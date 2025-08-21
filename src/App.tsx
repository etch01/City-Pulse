/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import store, { persistor }  from './redux/store';
import { retrieveToken, saveToken, TokenCtx } from "./screens/Auth/token";
import { PersistGate } from "redux-persist/integration/react";
import i18nextConfig  from './I18n/i18nextConfig';

function App(): React.JSX.Element {
  const [token, setToken] = React.useState<string>();

//Init localization
const init = async () => {
  i18nextConfig.initalizeI18Next();
};

  React.useEffect(() => {
    init();
    retrieveToken().then((t: string | null) => {
      if (!t) return;
      setToken(t);
    });
  }, []);

  function unsetToken() {
    setToken(undefined);
    saveToken(undefined);
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TokenCtx.Provider value={{ token, setToken, unsetToken }}>
        <Provider ref={null} store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </TokenCtx.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
});

export default App;
