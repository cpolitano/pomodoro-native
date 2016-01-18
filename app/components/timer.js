'use strict';

var React = require('react-native');
var { StyleSheet, Text, View } = React;
var Button = require('react-native-button');

var styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    color: 'tomato',
    fontSize: 40,
    padding: 10,
    textAlign: 'center'
  },
  timer: {
    color: 'white',
    fontSize: 75,
    textAlign: 'center',
    margin: 10
  }
});

class Timer extends React.Component {
	render() {
		return (
      <View>
        <Button 
          style={styles.button}
          onPress={this.handleClick}>
          start timer</Button>
        <Text style={styles.timer}>25:00</Text>
      </View>
    );
	}

  handleClick(event) {
    console.log('Click!');
  }
};

module.exports = Timer;
