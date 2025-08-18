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

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
});

export default App;
