import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserActive from './components/UserActive';
import UserList from './components/UserList';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        active: 0,
        searchValue: '',
        data: [],
        activeData: []
    };
  }
  
  componentDidMount() {
      $.getJSON('data.json', (data) => {
          this.setState({
              data: data
          });
      })
  }
  
  doSearch(val) {
      this.setState({
         searchValue: val 
      });
      console.log(this);
  }
  
  doSort(by) {
      console.log(by);
  }

  getUser(id) {
      let data = this.state.data;
      
      for (let i = 0; i < data.length; i++)
        if (data[i].id == id)
           return data[i];
      
      return data[0];
  }

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar update={this.doSearch.bind(this)}/>
        <ToolBar buttonClick={this.doSort}/>
        <div className="row">
            <UserActive data={this.getUser(this, this.state.active)}/>
            <UserList searchValue={this.state.searchValue}/>
        </div>
      </div>
    );
  }
}
