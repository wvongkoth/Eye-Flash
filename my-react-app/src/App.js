import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainNav from "./components/MainNav";
import JumboCard from "./components/JumboCard";


class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <JumboCard />
      </div>
    );
  }
}

export default App;
