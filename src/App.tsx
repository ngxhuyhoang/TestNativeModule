import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToastExample from './ToastExample';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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

export default App;
