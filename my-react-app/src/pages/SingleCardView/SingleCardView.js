import React, { Component } from "react";
import array from "../../array.json";

import JumboCard from "../../components/JumboCard";
import WordJC from "../../components/WordJC";

class SingleCardView extends Component{
	// Setting this.state.friends to the friends json array
	state = {
		array
	};

	render() {
	    return (
			<div>
				<JumboCard>
						{this.state.array.map(array => (
				          <WordJC
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