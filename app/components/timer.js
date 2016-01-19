'use strict';

var React = require('react-native');
var { StyleSheet, Text, View } = React;
var Button = require('react-native-button');
var TimerMixin = require('react-timer-mixin');

var timerDuration = 25 * 60;
var startTime;
var timeLeft;
var minutes;
var seconds;

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
      timeRemaining: '25:00'
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
    this.startCountdown();
  },

  timer() {
    timeLeft = timerDuration - (((Date.now() - startTime)/1000) | 0 );
    
    minutes = (timeLeft / 60) | 0;
    seconds = (timeLeft % 60) | 0;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if ( timeLeft > 0 ) {
      this.setState({
        timeRemaining: minutes + ':' + seconds
      });
    }
  },

  startCountdown() {
    startTime = Date.now();
    this.timer();
    this.setInterval(this.timer, 1000);
  }
});

module.exports = Timer;
