import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import "./JumboCard.css";
import WordJC from '../WordJC';
import WordBJC from '../WordBJC';
import FrontJC from '../FrontJC';
import BackJC from '../BackJC';
import array from "../../array.json";

class JumboCard extends Component {

  constructor() {
    super();
    this.state = {
      isFlipped: false,
      words: array
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <FrontJC key="front">
          <div className="jumboCardFlip" onClick={this.handleClick}>
            <p className="centerTextJC">
              {this.state.words.map((word, i) => (
                <WordJC
                  id={i}
                  word={word.word}
                /> 
              ))}
            </p>
          </div>
        </FrontJC>

        <BackJC key="back">
          <div className="jumboCardFlip" onClick={this.handleClick}>
            <p className="centerTextJC">
              {this.state.words.map((word, i) => (
                <WordBJC
                  id={i}
                  word={word.bword}
                />
              ))}
            </p>
          </div>
        </BackJC>
      </ReactCardFlip>
    )
  }
};

export default JumboCard;