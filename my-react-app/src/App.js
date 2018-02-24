import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav";

import Home from "./pages/Home";

const App = () =>
  <Router>
    <div>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>;

export default App;