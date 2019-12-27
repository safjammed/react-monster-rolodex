import React, { Component } from 'react';

import  CardList from './components/card-list/card-list.component';

import './App.css';
import SearchBox from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(users => this.setState({monsters:users}))
  }
  handleChange = (e)=>{
    this.setState({searchField: e.target.value})
  }

  
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) );

      return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox 
          handleChange={this.handleChange} 
          placeholder="Search Monsters"
          />
          <CardList monsters={filteredMonsters} />          
        </div>
      )
  }
}

export default App;
