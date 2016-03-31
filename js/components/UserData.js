import React, { Component } from 'react';
import UserActive from './UserActive';
import UserList from './UserList';

export default class UserData extends Component {
  
  constructor(props) {
		super(props);
	}
  
  buttonClick(by) {
      this.props.buttonClick(by);
  }
  
  render() {
    return (
      <div className="row">
        <UserActive/>
        <UserList/>
      </div>
    );
  }
}
