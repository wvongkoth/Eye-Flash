import React from "react";
import "./MainNav.css";

const MainNav = props => (
	<div>
		<nav className="mainNavBar">
		  <div className="nav-wrapper">
		    <div id="logoImage" className="brand-logo"></div>
		    <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
		    <ul className="hide-on-med-and-down mainNavBarList">
		      <li className="listLeft"><a href="/"><i className="material-icons left">search</i>Browse</a></li>
		      <li className="listLeft"><a><i className="material-icons left">view_module</i>My Decks</a></li>
		      <li className="listRight"><a className="dropdown-button" href="#!" data-activates="dropdown1">Other Settings<i className="material-icons right">arrow_drop_down</i></a></li>
		      <li className="listRight">Main Language: <span id="mainLanguage">English</span></li>
		    </ul>
		  </div>
		</nav>
	</div>
);

export default MainNav;

// for dropdown
// <ul id="dropdown1" className="dropdown-content">
//   <li><a href="#!">account</a></li>
//   <li><a href="#!">two</a></li>
//   <li className="divider"></li>
//   <li><a href="#!">three</a></li>
// </ul>