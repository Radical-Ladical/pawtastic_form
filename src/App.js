import React, {Component} from 'react';
import './components/rename_later.js'
import './App.css';

export default class app extends Component {
 




  render() {
    return(
      <div class ="Container">
        <div class ="Row1">
          <ul class="list">
            <li class="l1">Human Profile</li>
            <li class="l2">Pet Basics</li>
            <li class="l3">Pet Details</li>
            <li class="l4">Confirm</li>
          </ul>
        </div>
        <div class =" Row2">
          <h1 class="h1">Yay, we love dogs!Give us the basics about your pup.</h1>
          <input class="name"></input>
          <input class="breed"></input>
          <input class="birthday"></input>
        </div>
      </div>
    )
  }
}
