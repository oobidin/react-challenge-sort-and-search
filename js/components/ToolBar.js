import React, { Component } from 'react';

export default class ToolBar extends Component {
    componentDidMount() {
        this.setState({
            by: '',
            asc: 1
        });
    }
  
    buttonClick(by) {
        this.setState((prev) => ({by: by, asc: prev.by == by ? !prev.asc : 1}), () => {this.props.buttonClick(by, this.state.asc)});
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
