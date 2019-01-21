import React, {Component} from 'react';
import UserComponent from '../src/UserComponent';

export default class UserBoard extends Component{

  state = {
    present: true,
    present1: true,
    present2: true
  }

  toggle1 = () =>{
    this.setState({
      present: !this.state.present
    })
  }

  toggle2 = () =>{
    this.setState({
      present1: !this.state.present1
    })
  }

  toggle3 = () =>{
    this.setState({
      present2: !this.state.present2
    })
  }

  render(){
    return(
      <div>
        <h3>User Board</h3>
        <div>
          <p>User:<b>{this.props.name}</b><b>{this.state.present ? ' is ':' is not '}</b> present</p>
          <button onClick = {this.toggle1}>Toggle</button>
        </div>
        <div>
          <p>User: <b>{this.props.name1}</b><b>{this.state.present1 ? ' is ': ' is not '}</b>present</p>
          <button onClick = {this.toggle2}>Toggle</button>
        </div>
        <div>
          <p>User: <b>{this.props.name2}</b><b>{this.state.present2 ? ' is ':' is not '}</b>present</p>
          <button onClick = {this.toggle3}>Toggle</button>
        </div>
      </div>
    );
  }
}
