import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainNav from "./components/MainNav";
import Card from "./components/Card";


class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Card />
      </div>
    );
  }
}

export default App;
