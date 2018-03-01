import React, { Component } from "react";
import JumboCard from "../../components/JumboCard";
import MiniCard from "../../components/MiniCard";
import Form from "../../components/Form";
import WordJC from "../../components/WordJC";
import CreateForm from "../../components/CreateForm";


const Home = () =>
	<div className="container">
		<MiniCard />
		<MiniCard />
		<MiniCard />
		<MiniCard />
		<CreateForm />
	</div>


export default Home;