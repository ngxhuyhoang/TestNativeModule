/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ToastExample from './ToastExample';
import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules;
import { requireNativeComponent } from 'react-native';

const RCTViewTest = requireNativeComponent('RCTViewTest');

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

      <RCTViewTest
        backgroundColor="#f00f00"
        style={{ width: 200, height: 200, borderWidth: 1 }}
      />
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
