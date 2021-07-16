import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {CardList} from './CardList/CardList';
import {SearchBox} from './Search/Search'
class App extends Component {
  constructor(){
    super();
    this.state ={
      users: [],
      searchField: ''
    }
  }
  componentDidMount(){
      fetch('https://dummyapi.io/data/api/user', {
        method: 'get' ,
        headers: {
          'app-id': '60b6023c98e5768341aefad0'
        }
      })
      .then(response => response.json())
      .then(user => this.setState({users: user.data}))
    }
  render() {
    const {users, searchField} = this.state;
    const filterUsers = users.filter(user =>
      user.firstName.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className=" container">
      <h1>Digiretail Team </h1>
      <SearchBox placeholder='Search User' handleChange={e => 
        this.setState({searchField: e.target.value})}>
      
      </SearchBox>
      <CardList users={filterUsers}/>
      
</div>

    );
  }
}

export default App;

// <h1>Users</h1>
      // 