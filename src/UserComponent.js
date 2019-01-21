import React, {Component} from 'react';
import UserBoard from '../src/UserBoard';

export default class UserComponent extends Component{

  render(){
    return(
      <UserBoard name = "Alice" name1 = "John" name2 = "Fooo"/>
    );
  }
}
