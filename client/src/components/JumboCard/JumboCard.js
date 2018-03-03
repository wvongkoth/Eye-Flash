import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import "./JumboCard.css";
import WordJC from '../WordJC';
import FrontJC from '../FrontJC';
import BackJC from '../BackJC';
import array from "../../array.json";

class JumboCard extends Component {

  constructor() {
    super();
    this.state = {
      isFlipped: false,
      words: array,
      clickProgress: "initial"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  clickWord = id => {
    // Filter this.state.array for array with an id not equal to the id being removed
    const array = this.state.words.filter((word, i) => id !== i);
    // Set this.state.array equal to the new array array
    this.setState({ words: array });
    this.setState({ clickProgress: "pictureOptions" }, function () {
      console.log(this.state.clickProgress);
    },
    );
  };

  getInitialStatus = () => {
    return { clickProgress: "initial" };
  }

  onFirstClick = () => {
    this.setState({ clickProgress: "pictureOptions" });
  }

  onSecondClick = () => {
    this.setState({ clickProgress: "pictureChosen" });
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <FrontJC key="front">
          <div className="jumboCardFlip" onClick={this.handleClick}>
            <p className="centerTextJC">
              {this.state.words.map((word, i) => (
                ({ clickProgress: "initial" }) ?
                  <WordJC
                    clickWord={this.clickWord}
                    id={i}
                    word={word.word}
                  /> :
                  <WordJC
                    clickWord={this.clickWord}
                    id={i}
                    word="changed"
                  />
              ))}
            </p>
          </div>
        </FrontJC>

        <BackJC key="back">
          <div className="jumboCardFlip" onClick={this.handleClick}>
            <p className="centerTextJC">
              {this.state.words.map((word, i) => (
                <WordJC
                  clickWord={this.clickWord}
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