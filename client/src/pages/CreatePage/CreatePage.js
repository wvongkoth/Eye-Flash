import React from 'react';
import axios from 'axios';
import "./CreatePage.css";

export default class CreatePage extends React.Component {
  state = {
    deckName: [],
    cardFront: [],
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
    const newDeck = {
      deckName: this.state.deckName,
      cardFront: this.state.cardFront,
    };
    console.log(newDeck)
    axios.post(`http://localhost:5000/api/addNewDeck`, newDeck)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
	    <div>
			<div className="row">
				<div className="col s12 infoLanguageTop">
					<div className="card infoLanguageTop">
						<div className="card-content">
							<span className="card-title">Deck Name: </span>
							<input placeholder="Insert Deck Language" type="text" deckName="deckName" onChange={this.handleDeckChange}/>
								<p>I am writing in 
								<span className="chip initialLanguageChip">
									English
								</span>
								. I would like to translate to 
								</p>
								<div className="translatedLanguageChipDiv">
									<div className="chips chips-autocomplete">Insert desired language here</div>
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
				<button onClick={this.handleSubmit} class="btn waves-effect waves" type="submit" name="action">Submit
				<i class="material-icons right">send</i>
				</button>
			</div>
		</div>
    )
  }
}