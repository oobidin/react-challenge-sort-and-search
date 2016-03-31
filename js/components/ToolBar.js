import React, { Component } from 'react';

export default class ToolBar extends Component {
  
  constructor(props) {
		super(props);
	}
  
  buttonClick(by) {
      this.props.buttonClick(by);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
            <div className="toolbar">
                <button className="btn btn-default" onClick={this.buttonClick.bind(this, "name")}>
                    <i className="icon fa fa-sort-alpha-asc"></i>
                    <span>Sort by name</span>
                </button>
                <button className="btn btn-default" onClick={this.buttonClick.bind(this, "age")}>
                    <i className="icon fa fa-sort-numeric-desc"></i>
                    <span>Sort by age</span>
                </button>
            </div>
        </div>
      </div>
    );
  }
}
