import React from "react";
import "./MainNav.css";

const MainNav = props => (
	<div>
		<ul id="dropdown1" class="dropdown-content">
		  <li><a href="#!">account</a></li>
		  <li><a href="#!">two</a></li>
		  <li class="divider"></li>
		  <li><a href="#!">three</a></li>
		</ul>
		<nav class="mainNavBar">
		  <div class="nav-wrapper">
		    <div id="logoImage" class="brand-logo"><a href="#!"></a></div>
		    <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		    <ul class="hide-on-med-and-down mainNavBarList">
		      <li class="listLeft"><a href=""><i class="material-icons left">search</i>Browse</a></li>
		      <li class="listLeft"><a href=""><i class="material-icons left">view_module</i>My Decks</a></li>
		      <li class="listRight"><a class="dropdown-button" href="#!" data-activates="dropdown1">Other Settings<i class="material-icons right">arrow_drop_down</i></a></li>
		      <li class="listRight">Main Language: <span id="mainLanguage">English</span></li>
		    </ul>
		  </div>
		</nav>
	</div>
);

export default MainNav;