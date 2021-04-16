import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ToastExample from './ToastExample';
import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules;

const App = () => {
  useEffect(() => {
    ToastExample.show('Hello World', ToastExample.LONG);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>

      <TouchableOpacity
        onPress={() => {
          CalendarModule.createCalendarEvent('testName', 'testLocation');
        }}>
        <Text>Calendar Module</Text>
      </TouchableOpacity>
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
