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
import store  from './redux/store';
import { retrieveToken, saveToken, TokenCtx } from "./screens/Auth/token";

function App(): React.JSX.Element {
  const [token, setToken] = React.useState<string>();

  React.useEffect(() => {
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
          <AppNavigator />
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
