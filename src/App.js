import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ''
    };
  };

  onSearchChange = (event) => {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    console.log(filterRobots);
  };

  render() {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
};

export default App;