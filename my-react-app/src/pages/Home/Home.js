import React, { Component } from "react";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";

const Home = () =>
	<div>
		<Navbar />
		<Cards />
		<Header />
		<Form />
		<Footer />
	</div>


export default Home;