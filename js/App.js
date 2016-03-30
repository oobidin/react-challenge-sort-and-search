import React, { Component } from 'react';
import SearchBar from './components/SearchBar';


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  doSearch(e) {
      console.log(e);
  }

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar update={this.doSearch}/>
      </div>
    );
  }
}
