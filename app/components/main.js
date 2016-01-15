'use strict';

var React = require('react-native');
var { StyleSheet, Text, View } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    marginTop: 60
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
	       <Text style={styles.welcome}>welcome to pomodoro</Text>
	    </View>
		);
	}
};

module.exports = Main;
