// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HttpExample from './components/HttpExample';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HttpExample />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;