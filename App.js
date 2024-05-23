// App.js
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HttpExample from "./components/HttpExample";
import HttpFlatList from "./components/HttpFlatList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HttpFlatList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
