import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import axios from "axios"
import "./JumboCardSubmitBtn.css";
import WordJC from '../WordJC';
import WordBJC from '../WordBJC';
import FrontJC from '../FrontJC';
import BackJC from '../BackJC';
import array from "../../array.json";

class JumboCardSubmitBtn extends Component {

  constructor() {
    super();
    this.state = {
      isFlipped: false,
      //should be reset with incoming array
      words: array,
      data: [],
      myData: []
      //will be set by incoming request
      // deckId: "5aa1d8b0daff2403ac6377eb",
      // currentCard: 0,
      // totalCards: 0,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log('YES I GOT THIS FAR');
    // const newDeck = {
    //   deckName: this.state.deckName,
    //   cardFront: this.state.cardFront,
    //   translatedLanguage: 'Spanish'
    // };
    // console.log(newDeck)
    // axios.post(`http://localhost:5000/api/newDeck`, newDeck)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({redirect: '/singlecard'})
    //   })
    this.setState({redirect: '/home'})
  }

  componentWillMount(){
    const myObj = JSON.parse(localStorage.data)
    this.setState({myData: myObj})
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <FrontJC key="front">
            <div className="jumboCardFlip z-depth-3" onClick={this.handleClick}>
              <p className="centerTextJC">
                {this.state.myData.cardImages.map((word, i) => (
                  <WordJC
                    id={i}
                    word={word.word}
                    images={word.images}
                    wordDataId={word.word}
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

        <div class="fixedSubmitBtn">
          <button onClick={this.handleSubmit} class="btn waves-effect waves" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>

    )
  }
};

export default JumboCardSubmitBtn;
