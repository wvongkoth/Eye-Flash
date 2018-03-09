import React, { Component } from "react";
import MiniCard from "../../components/MiniCard";
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			decks: [],
			redirect: null,
		};
	}

	myClick = event => {
		axios.get("/api/jsonTest").then((response) => {
			console.log(response.data)
			localStorage.data = JSON.stringify(response.data,undefined,2)
		this.setState({ 
			redirect: '/singlecard' })
		})
	}

	componentWillMount() {
		axios.get('/api/allDecks')
			.then((response) => {
				const decks = response.data;
				this.setState({ decks })
			})
			.catch((e) => { 
				console.log(e);
			})
	}


	render() {
		const decks = this.state;
		return (
			this.state.redirect?
				<Redirect to={this.state.redirect} />
				:

			<div className='container'>
				{this.state.decks.map(deck => (
					<MiniCard 
						word={deck.deckName}
						deckID={deck._id}
						translatedLanguage={deck.translatedLanguage}
						clickHandler={this.myClick}
					/>
				))}
			</div>
		)
	}
}