import React, { Component } from "react";
import axios from 'axios';
import "./SingleCardCreate.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Redirect } from "react-router-dom";
import MiniCard from "../../components/MiniCard";

export default class SingleCardCreate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			decks: []
		};
	}

  state = {
    cardFront: []
  }

  componentDidMount() {
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

  handleDeckChange = event => {
    this.setState({ deckName: event.target.value });
  }

  handleCardChange = event => {
    this.setState({ cardFront: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const singleCard = {
      cardFront: this.state.cardFront,
    };
    axios.post(`http://localhost:5000/api/addNewCard`, singleCard)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
  	const languageOptions = ['English', 'Spanish', 'Chinese', 'Hindi'];
  	const defaultInitialOption = languageOptions[0];
  	const defaultTranslatedOption = languageOptions[1];
  	const decks = this.state;
    return (
	    <div>
			<div className="row">
				<div className="col s12 infoLanguageTop">
					<div className="card infoLanguageTop">
						<div className="card-content">
							<span className="card-title">Deck Name: </span>
									<div className='container'>
										<select value={this.state.decks} onChange={this.handleDeckChange}>
											{this.state.decks.map(decks => (
												<option value={decks.deckName} />
											))}
										</select>
									</div>
								<div>
									I am writing in: 
									<Dropdown options={languageOptions} onChange={this._onSelect} value={defaultInitialOption} placeholder="Select an option" />
								</div>

								<div>
									I would like to translate to: 
									<Dropdown options={languageOptions} onChange={this._onSelect} value={defaultTranslatedOption} placeholder="Select an option" />
								</div>
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

				<button onClick={this.handleSubmit} class="btn waves-effect waves" type="submit" name="action">Add another card</button>

				<button onClick={this.handleSubmit} class="btn waves-effect waves" id="submitCard" type="submit" name="action">Submit
					<i class="material-icons right">send</i>
				</button>
			</div>
		</div>
    )
  }
}