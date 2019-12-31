import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.components';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      //we are creating an array here
      //nomrally would not hard code data here we would fetch from an api here in this array
      monsters: [],
      searchField: ''  
    };
  }

  //this is a lifecycle method
// this is for fetching APIs
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));//users was the file name in the jsonplaceholder uptop
  }

//when using this. in funciton below you have to use = () => otherwise
//at the top you have to write in constructor this.setState = this.setState.bind(this);
//you would have to use .bind to make it work
//this is called lexical scoping in react
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    //top is easy way of writing this.
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters' 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
    </div>
    )
  }
}

//this was used before we created the search field <CardList monsters={this.state.monsters}></CardList>
//this was old <input 
        //type='search' 
        //placeholder='search monsters' 
        //onChange={e => this.setState({searchField: e.target.value})} />
        //<CardList monsters={filteredMonsters}></CardList>

        // rewriting handleChange so this can be reused. below is old version
        //<SearchBox
        //placeholder='search monsters' 
        //handleChange={e => this.setState({searchField: e.target.value})}/>

export default App;
