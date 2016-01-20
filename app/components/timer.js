'use strict';

var React = require('react-native');
var { StyleSheet, Text, View } = React;
var Button = require('react-native-button');
var TimerMixin = require('react-timer-mixin');

var timerDuration = 25 * 60;
var initialTime = '25:00';
var timerInterval;
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
      timeRemaining: initialTime,
      isStarted: false
    }
  },

	render() {
		return (
      <View>
        <Button 
          style={styles.button}
          onPress={this.handleClick}>
          { this.state.isStarted ? "stop timer" : "start timer" }</Button>
        <Text style={styles.timer}>{this.state.timeRemaining}</Text>
      </View>
    );
	},

  handleClick(event) {
    if (this.state.isStarted) {
      this.stopCountdown();
    } else {
      this.startCountdown();
    }
    this.setState({
      isStarted: !this.state.isStarted
    });
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
    timerInterval = this.setInterval(this.timer, 1000);
  },

  stopCountdown() {
    this.clearInterval(timerInterval);
    this.setState({
      timeRemaining: initialTime
    });
  }
});

module.exports = Timer;
