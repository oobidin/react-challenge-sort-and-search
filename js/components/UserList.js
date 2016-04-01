import React, { Component } from 'react';
import UserData from './UserData';

export default class List extends Component {
  handleChange(e) {
      if (this.props.update)
        this.props.update(e.target.value)
       else
        return;
  }
  
  render() {
    const tableData = this.props.data.map((item) => <UserData data={item} key={item.id} itemClick={this.props.itemClick}/>);
    
    return (
      <div className="col-sm-8 col-md-9 col-lg-10">
        <table className="user-list table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
      </div>
    );
  }
}