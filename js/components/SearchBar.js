import React, { Component } from 'react';

export default class SearchBar extends Component {
  
  handleChange(e) {
      this.props.update(e.target.value)
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
            <div className="form-group">
                <input placeholder="Search people by name..." className="form-control" onChange={this.handleChange.bind(this)}/>
            </div>
        </div>
      </div>
    );
  }
}