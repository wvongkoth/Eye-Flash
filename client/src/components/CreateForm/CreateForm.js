import React, { Component } from 'react';
import "./CreateForm.css";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
  this.onChange = this.onChange.bind(this);
  }


  onChange(event) {
this.setState({
      cardFront: event.target.value
    });
    console.log(event.target.value)
    // console.log(this.props)
    // console.log(event.target.id)
    // const state = this.state
  //       state[event.target.name] = event.target.value;
  //       this.setState(state);
  }  


render(){
  return(
    <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <div className="input-field">
                <i className="material-icons prefix">g_translate</i>
                <input id="icon_prefix" type="text" className="validate"  onChange={this.onChange} />
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