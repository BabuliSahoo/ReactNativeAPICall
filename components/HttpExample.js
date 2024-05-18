// components/HttpExample.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HttpExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <Text>{data.fact}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HttpExample;