import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
    }).catch(this.setState({ robots: robots }))
      .then(users => {
        this.setState({ robots: users});
      });
  };

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />
      </div>
    );
  }
};

export default App;