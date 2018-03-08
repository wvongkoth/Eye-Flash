import React, { Component } from "react";
import MiniCard from "../../components/MiniCard";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			decks: []
		};
	}

	componentWillMount() {
		
		fetch('http://localhost:5000/api/getAllDecks')
			.then(res => {
				console.log(res);
				return res.json()
			})
			.then(decks => {
				console.log(decks);
				this.setState({ decks })
			});
	}

	render() {
		const decks = this.state;
		return (
			<div className='container'>
				{this.state.decks.map(decks => (
					<MiniCard
						word={decks.deckName}
						id={decks.id}
						translatedLanguage={decks.translatedLanguage}
					/>
				))}
			</div>
		)
	}
}
export default Home;