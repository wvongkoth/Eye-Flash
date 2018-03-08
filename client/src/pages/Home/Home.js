import React, { Component } from "react";
import MiniCard from "../../components/MiniCard";
import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			decks: []
		};
	}

	componentWillMount() {
		axios.get('/api/allDecks')
			.then((response) => {
				const decks = response.data;
				console.log(decks);
				this.setState({ decks })
			})
			.catch((e) => { 
				console.log(e);
			})
			
		// fetch('/api/jsonTest')
		// 	.then(res => {
		// 		console.log(res);
		// 	})
		// 	.then(decks => {
		// 		console.log(decks);
		// 		this.setState({ decks })
		// 	});
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