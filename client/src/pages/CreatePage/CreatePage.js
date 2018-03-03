import React, { Component } from "react";
import array from "../../array.json";
import "./CreatePage.css";

import CreateForm from "../../components/CreateForm";

class CreatePage extends Component{


	render() {
	    return (
		    <div>
		      <div className="row">
		        <div className="col s12 infoLanguageTop">
		          <div className="card infoLanguageTop">
		            <div className="card-content">
		              <span className="card-title">Deck Name:</span>
		              <p>I am writing in 
		              	<span className="chip initialLanguageChip">
						    English
						 </span>
		              . I would like to translate to 
		              </p>
		              <div className="translatedLanguageChipDiv">
		              	<div className="chips chips-autocomplete"></div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
	      		<div className="container">
					<CreateForm />
					<CreateForm />
					<CreateForm />
					<CreateForm />
					<CreateForm />
				</div>
			</div>
		);
	}
}


export default CreatePage;