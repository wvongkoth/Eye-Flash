import React, { Component } from "react";
import JumboCard from "../../components/JumboCard";
import MiniCard from "../../components/MiniCard";
import Form from "../../components/Form";
import array from "../../array.json";
import WordJC from "../../components/WordJC";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			decks: []
		};
	}

	componentDidMount() {
		fetch("/api/getAllDecks")
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						decks: result.decks
					});
					console.log("hiiii");
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
					console.log('hryyyy');
				}
			)
	}

	render() {
		const decks = this.state;
		return (
			<div className='container'>
				{this.state.decks.map(decks => (
					<MiniCard
						word={decks.deckName}
					/>
				))};
			</div>
		);
	};
}


export default Home;