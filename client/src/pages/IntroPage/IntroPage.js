import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';

import WordJC from '../../components/WordJC';
import WordBJC from '../../components/WordBJC';
import FrontJC from '../../components/FrontJC';
import BackJC from '../../components/BackJC';
import array from "../../array.json";

class IntroPage extends Component {

  constructor() {
    super();
    this.state = {
      isFlipped: false,
      words: array,
      random: 0,
      currentTranslatedPhrase: "I want Taco Bell",
      translatedPhraseEnglish: "I want Taco Bell",
      translatedPhraseSpanish: "Yo quiero Taco Bell",
      translatedPhraseSwahili: "Mimi unataka Taco Bell",
      translatedPhraseHindi: "Mujhe chahiye Taco Bell"
    };
  }

  changeTL = () => {
  	var min = 0;
    var max = 3;
    var rand =  min + Math.floor((Math.random() * (max-min)));
    console.log(rand);
    (rand === 0) ?
      ( this.setState ({ currentTranslatedPhrase: "I want Taco Bell"}) ) :
      (rand === 1) ?
      ( this.setState ({ currentTranslatedPhrase: "Yo quiero Taco Bell"}) ) :
      (rand === 2) ?
      ( this.setState ({ currentTranslatedPhrase: "Mimi unataka Taco Bell"}) ) :
      ( this.setState ({ currentTranslatedPhrase: "Mujhe chahiye Taco Bell"}) )
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
    ({ isFlipped: true }) ? this.changeTL() : this.state.currentTranslatedPhrase;
  }

  render() {

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <FrontJC key="front">
          <div className="jumboCardFlip" onClick={this.handleClick}>
            <p className="centerTextJC">
              <WordJC word= "I" />
              <WordJC word= "want" />
              <WordJC word= "Taco" />
              <WordJC word= "Bell" /> 
            </p>
          </div>
        </FrontJC>

        <BackJC key="back">
          <div className="jumboCardFlip" onClick={this.handleClick}>
            <p className="centerTextJC">
              <WordBJC word={this.state.currentTranslatedPhrase} />
            </p>
          </div>
        </BackJC>
      </ReactCardFlip>
    )
  }
};

export default IntroPage;