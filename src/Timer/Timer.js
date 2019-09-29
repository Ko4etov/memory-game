import React, { Component } from 'react'
import Moment from 'moment';
import './Timer.scss';

export default class Timer extends Component {
    constructor (props) {
        super(props);

        this.state = {
          mainTimerValue: 0,
          name: 1
        }
        
        this.timerStartHandler = this.timerStartHandler.bind(this);
    }

    componentDidMount() {
      let newTimer = Moment([0, 0], "mm:ss").format("mm:ss");
      this.setState({
        mainTimerValue: newTimer
      })
    } 

    timerTick(timer, timeStart, intervalID) {
      if (this.props.checkEndGame === 1) {
        clearInterval(intervalID)
        this.timeRef.disabled = false;
        let newTimer = Moment([0, 0], "mm:ss").format("mm:ss");
        this.setState({
          mainTimerValue: newTimer
        })
        return
      }

      let newTime = timeStart.add(1, 'seconds').format("mm:ss");
      timer = newTime;
      this.setState({
        mainTimerValue: timer
      })
      this.props.getEndTime(this.state.mainTimerValue);
    }

    timerStartHandler(event) {
      event.target.disabled = true;
      let newTimer = this.state.mainTimerValue,
      timeStart = Moment([0, 0], "mm:ss");
      this.props.checkStartGame(1)
      let intervalID = setInterval(() => { this.timerTick(newTimer, timeStart, intervalID) }, 1000);
    }

    render() {
        const timerClasses = ['timer'],
        buttonClasses = ['button-timer'];

        return(
          <>
            <div 
              className={timerClasses.join(' ')} 
            >{this.state.mainTimerValue}</div>
            <button 
            onClick={ this.timerStartHandler } 
            className={buttonClasses}
            ref={(timeRef) => {this.timeRef = timeRef}}
            >Начать игру</button>
          </>
        )
    }
}