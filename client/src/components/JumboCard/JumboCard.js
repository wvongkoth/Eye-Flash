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

  rightArrowClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  leftArrowClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {

    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <FrontJC key="front">
            <div className="jumboCardFlip z-depth-3" onClick={this.handleClick}>
              <p className="centerTextJC">
                {this.state.words.map((word, i) => (
                  <WordJC
                    id={i}
                    word={word.word}
                    images={word.images}
                  /> 
                ))}
              </p>
            </div>
          </FrontJC>

          <BackJC key="back">
            <div className="jumboCardFlip z-depth-3" onClick={this.handleClick}>
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

        <div class="fixedArrows">
          <a onClick={this.leftArrowClick} class="btn-floating btn-large waves-effect waves-light arrowLButton"><i class="material-icons">navigate_before</i></a>
          <a onClick={this.rightArrowClick} class="btn-floating btn-large waves-effect waves-light arrowRButton"><i class="material-icons">navigate_next</i></a>
        </div>
      </div>

    )
  }
};

export default JumboCard;