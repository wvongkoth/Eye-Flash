import React, { Component } from "react";
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class AddNewCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    deckID: '',
		    cardFront: [],
		    redirect: null
		};
	}

	componentDidMount() {
		const dataDeckID = JSON.parse(localStorage.data)
		console.log(dataDeckID.card.deckID)
		this.setState({dataDeckID: dataDeckID.card.deckID})
	  }

	handleCardChange = event => {
		this.setState({ cardFront: event.target.value });
	} 

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		const newCard = {
			deckID: this.state.dataDeckID,
			cardFront: this.state.cardFront,
		};
		const myObj = {
			myName: 'Will I AM'
		}
		console.log(newCard)

		this.postData(newCard);
		console.log(newCard);

	}

	postData = newCard => {
		axios.post('/api/newCard', newCard).then(res => {
			console.log(res);
		})
	}

	render() {
	  	const languageOptions = ['English', 'Spanish', 'Chinese', 'Hindi'];
	  	const defaultInitialOption = languageOptions[0];
	  	const defaultTranslatedOption = languageOptions[1];

    	return (
	    	this.state.redirect?
				<Redirect to={this.state.redirect} /> :
		    <div>
				<div className="row">
					<div className="col s12 infoLanguageTop">
						<div className="card infoLanguageTop">
							<div className="card-content">
								<span className="card-title">Deck Name: Spanish </span>
							</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col s12">
						<div className="card">
							<div className="card-content">
									<div className="input-field">
										<i className="material-icons prefix">g_translate</i>
											<input id="icon_prefix" type="text" className="validate" cardFront="cardFront" onChange={this.handleCardChange} />
										<label for="icon_prefix">Enter phrase or short sentence to translate (limit 50 charcters)</label>
									</div>
								</div>
							</div>
						</div>
					</div>

					<button onClick={this.handleSubmit} class="btn waves-effect waves" type="submit" name="action">Submit
						<i class="material-icons right">send</i>
					</button>
				</div>
			</div>
    	)
  }
}