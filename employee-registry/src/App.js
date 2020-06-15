import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Table from './components/Table';
import data from './employees.json';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Search />
        <Table data={data}/>
      </div>
    );
  }
}

export default App;