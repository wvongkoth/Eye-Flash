import React, { Component } from "react";
import JumboCard from "../../components/JumboCard";
import MiniCard from "../../components/MiniCard";
import Form from "../../components/Form";
import WordJC from "../../components/WordJC";
import CreateForm from "../../components/CreateForm";

import array from "../../array.json";

class Home extends Component {

	state = {
		array
	};

	render() {
		return (
			<div className="container">
				{this.state.array.map(array => (
		          <MiniCard
		            id={array.id}
		            word={array.word}
		          />
		        ))}
			</div>
		);
	}
}


export default Home;