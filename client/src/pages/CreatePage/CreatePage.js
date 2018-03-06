import React, { Component } from "react";
import array from "../../array.json";
import "./CreatePage.css";


import CreateForm from "../../components/CreateForm";

class CreatePage extends Component{

	constructor(props) {
		super(props);
		this.state = {
			deckName : '',
			cardFront : ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		console.log(event.target.value)
		this.setState({
			deckName: event.target.value,
			cardFront: event.target.value
		});
		// const state = this.state
  //       state[event.target.name] = event.target.value;
  //       this.setState(state);
	}



	onSubmit(event) {
		console.log(event.target)
		alert('A name was submitted: ' + this.state.cardFront);
		event.preventDefault();
		// const { deckName, cardFront } = this.state

		const newDeckData = {
			'deckName' : this.state.deckName,
			'cardFront' : this.state.cardFront
		}
		console.log(newDeckData);

		fetch('http://localhost:5000/api/addNewDeck', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: newDeckData

		}).then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err))
	}	

	render() {
		const { deckName, cardFront } = this.state;
	    return (
		    <div>
		      <div className="row">
		        <div className="col s12 infoLanguageTop">
		          <div className="card infoLanguageTop">
		            <div className="card-content">
		              <span className="card-title">Deck Name: </span>
		              <input placeholder="Insert Deck Language" id="deckName" type="text" onChange={this.onChange}/>
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
					<CreateForm value={this.cardFront} onChange={this.onChange} />

					<button onClick={this.onSubmit} class="btn waves-effect waves" type="submit" name="action">Submit
						<i class="material-icons right">send</i>
					</button>
				</div>
			</div>
		);
	}
}


export default CreatePage;