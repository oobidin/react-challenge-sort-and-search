import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserData from './components/UserData';

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

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar update={this.doSearch.bind(this)}/>
        <ToolBar buttonClick={this.doSort}/>
        <UserData searchValue={this.state.searchValue}/>
      </div>
    );
  }
}
