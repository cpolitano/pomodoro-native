import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './src/timer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Pomodoro!</Text>
        <Timer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    margin: 50,
  },
});
