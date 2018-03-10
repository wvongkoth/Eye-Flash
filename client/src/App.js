import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav";

import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";
import SingleCardChooseImage from "./pages/SingleCardChooseImage";
import SingleCardWithinDeck from "./pages/SingleCardWithinDeck";
import CreatePage from "./pages/CreatePage";
import IntroPage from "./pages/IntroPage";
import AddNewCard from "./pages/AddNewCard";


const App = () =>
  <Router>
    <div>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={UserSignUp} />
        <Route exact path="/singlecardchooseimage" component={SingleCardChooseImage} />
        <Route exact path="/singlecardwithindeck" component={SingleCardWithinDeck} />
        <Route exact path="/create" component={CreatePage} />
        <Route exact path="/addnewcard" component={AddNewCard} />
        <Route exact path="/intro" component={IntroPage} />
      </Switch>
    </div>
  </Router>;


export default App;

