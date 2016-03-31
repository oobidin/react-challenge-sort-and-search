import React, { Component } from 'react';

export default class List extends Component {
  
  handleChange(e) {
      if (this.props.update)
        this.props.update(e.target.value)
       else
        return;
  }
  
  render() {
    return (
      <div className="col-sm-8 col-md-9 col-lg-10">
      
      </div>
    );
  }
}