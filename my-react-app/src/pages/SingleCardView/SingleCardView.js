import React, { Component } from "react";
import array from "../../array.json";

import JumboCard from "../../components/JumboCard";
import WordJC from "../../components/WordJC";

class SingleCardView extends Component{
	// Setting this.state.array to the array json array
	state = {
		array
	};

	clickWord = id => {
		// Filter this.state.array for array with an id not equal to the id being removed
	    const array = this.state.array.filter(array => array.id !== id);
	    // Set this.state.array equal to the new array array
	    this.setState({ array });
	};

	render() {
	    return (
			<div>
				<JumboCard>
						{this.state.array.map(array => (
				          <WordJC
				          	clickWord={this.clickWord}
				            id={array.id}
				            word={array.word}
				          />
				        ))}
				</JumboCard>
			</div>
		);
	}
}


export default SingleCardView;