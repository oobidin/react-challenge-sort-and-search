import React, { Component } from 'react';

export default class UserActive extends Component {
  
  handleChange(e) {
      if (this.props.update)
        this.props.update(e.target.value)
       else
        return;
  }
  
  render() {
    return (
      <div className="col-sm-4 col-md-3 col-lg-2">
            
      </div>
    );
  }
}