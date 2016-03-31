import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  doSearch(e) {
      console.log(e);
  }
  
  doSort(by) {
      console.log(by);
  }

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar update={this.doSearch}/>
        <ToolBar buttonClick={this.doSort}/>
      </div>
    );
  }
}
