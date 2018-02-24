import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav";

import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";

const App = () =>
  <Router>
    <div>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={UserSignUp} />
      </Switch>
    </div>
  </Router>;

export default App;