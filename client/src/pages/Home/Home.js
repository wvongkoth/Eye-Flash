import React, { Component } from "react";
import MiniCard from "../../components/MiniCard";
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import "./Home.css";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			decks: [],
			redirect: null,
		};
	}

	myClick = event => {
		axios.get(`/api/nextCard/${event}/0`).then((response) => {
			console.log(event)
			localStorage.data = JSON.stringify(response.data,undefined,2)
		this.setState({ 
			redirect: '/singlecard' })
		})
	}

	addNewDeckClick = event => {
		this.setState({ 
			redirect: '/create' })
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
				<a className="btn-floating btn-large waves-effect waves-light #A44DA6" onClick={this.addNewDeckClick}><i className="material-icons">add</i></a>
			</div>
		)
	}
}