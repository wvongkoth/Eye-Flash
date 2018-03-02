import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import "./JumboCard.css";
import Form from '../Form';
import WordJC from '../WordJC';

/*
class JumboCard extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <YOUR_FRONT_CCOMPONENT key="front">
          <Form />
          <button onClick={this.handleClick}>Click to flip</button>
        </FrontComponent>
 
        <YOUR_BACK_COMPONENT key="back">
          <Form />
          <button onClick={this.handleClick}>Click to flip</button>
        </BackComponent>
      </ReactCardFlip>
    )
  }
}; */

const JumboCard = props => (
    <div className="jumboCard">
      <p className="centerTextJC">
        {props.children}
      </p>
    </div>
);

export default JumboCard;