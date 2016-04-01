import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserActive from './components/UserActive';
import UserList from './components/UserList';
import Preloader from './components/Preloader';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUser: null,
            searchValue: '',
            data: [],
            activeData: []
        };
    }
  
    componentDidMount() {
        $.getJSON('data.json', (data) => {
            this.setState({
                data: data,
                activeData: data
            });
            this.setState({
                activeUser: this.getUser(0)
            });
        })
    }
 
    doSearch(val) {
        let data = this.state.data.filter((a) => a.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        
        this.setState({
            activeData: data,
            activeUser: data[0]
        });
    }
  
    doSort(by, asc) {
        let activeData = this.state.activeData;
        activeData.sort(asc ? (a, b) => a[by] > b[by] ? 1 : a[by] == b[by] ? 0 : -1 : (a, b) => b[by] > a[by] ? 1 : a[by] == b[by] ? 0 : -1);
        this.setState({activeData: activeData});
    }

    getUser(id) {
        const data = this.state.data;

        for (let i = 0; i < data.length; i++)
            if (data[i].id == id)
                return data[i];

        return data[0];
    }

    selectUser(id) {
        this.setState({
            activeUser: this.getUser(id)
        });
    }

    render() {
        if (!this.state.data.length)
            return (<Preloader/>);

        return (
            <div className="app container-fluid">
                <SearchBar update={this.doSearch.bind(this)}/>
                <ToolBar buttonClick={this.doSort.bind(this)}/>
                <div className="row">
                    <UserActive data={this.state.activeUser}/>
                    <UserList searchValue={this.state.searchValue} data={this.state.activeData} itemClick={this.selectUser.bind(this)}/>
                </div>
            </div>
        );
    }
}
