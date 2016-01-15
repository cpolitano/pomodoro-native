'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet, NavigatorIOS } = React;
var Main = require('./app/components/main');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato'
  }
});

class Pomodoro extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'pomodoro',
          component: Main
        }}/>
    );
  }
};

AppRegistry.registerComponent('Pomodoro', () => Pomodoro);
