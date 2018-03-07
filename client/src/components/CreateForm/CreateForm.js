import React, { Component } from 'react';
import "./CreateForm.css";

class CreateForm extends Component {
  state = {
    cardFront: '',
  }

  handleCardChange = event => {
    this.setState({ cardFront: event.target.value });
  }   


render(){
  return(
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
    )
  }
}
        
export default CreateForm;