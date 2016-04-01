import React, { Component } from 'react';

export default class ToolBar extends Component {
    componentDidMount() {
        this.setState({
            nameAsc: 1,
            ageAsc: 1
        });
    }
  
    buttonClick(by) {
        const name = `${by}Asc`;
        const asc = this.state[name];
        this.props.buttonClick(by, asc);

        let newState = {};
        newState[name] = !asc;
        this.setState(newState);
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
