import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Table from './components/Table';
// eslint-disable-next-line
import styles from './App.css';
import employees from './employees.json';

class App extends Component {
  state = {
    employees: employees,
    sortColumn: '',
    sortColumnId: '',
};
  render () {
    return (
      <div>
            <Jumbotron />
            <Search />
            <Table />
          </div>
        );
  }

}

export default App;