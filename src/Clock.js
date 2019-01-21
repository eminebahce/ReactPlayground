import React, {Component} from 'react';

export default class Clock extends Component {

  state = {
    time: new Date()
  }

  update = () => {
    this.setState({
      time: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(()=> this.update(), 1000)
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
