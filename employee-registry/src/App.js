import React from 'react';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Table from './components/Table';
// eslint-disable-next-line
import styles from './App.css';

function App(){
    return (
      <div>
        <Jumbotron />
        <Search />
        <Table />
      </div>
    );
}

export default App;