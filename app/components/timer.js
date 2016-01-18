'use strict';

var React = require('react-native');
var { StyleSheet, Text, View } = React;
var Button = require('react-native-button');
var TimerMixin = require('react-timer-mixin');

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

var Timer = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    return {
      timeRemaining: 25
    }
  },

	render() {
		return (
      <View>
        <Button 
          style={styles.button}
          onPress={this.handleClick}>
          start timer</Button>
        <Text style={styles.timer}>{this.state.timeRemaining}</Text>
      </View>
    );
	},

  handleClick(event) {
    this.setInterval(this.countdown, 1000);
  },

  countdown() {
    if ( this.state.timeRemaining > 0 ) {
      this.setState({
        timeRemaining: this.state.timeRemaining - 1
      });
    }
  }
});

module.exports = Timer;
