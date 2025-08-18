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

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
});

export default App;
