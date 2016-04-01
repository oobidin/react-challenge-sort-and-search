import React, { Component } from 'react';

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
        <UserList/>
      </div>
    );
  }
}
