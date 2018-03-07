import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav";

import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";
import SingleCardView from "./pages/SingleCardView";
import CreatePage from "./pages/CreatePage";
import IntroPage from "./pages/IntroPage";


const App = () =>
  <Router>
    <div>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={UserSignUp} />
        <Route exact path="/singlecard" component={SingleCardView} />
        <Route exact path="/create" component={CreatePage} />
        <Route exact path="/intro" component={IntroPage} />
      </Switch>
    </div>
  </Router>;


export default App;

