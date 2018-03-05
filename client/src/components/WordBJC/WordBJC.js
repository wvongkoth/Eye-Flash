import React, {Component} from "react";
import "./WordBJC.css";

class WordBJC extends Component {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<span className="wordJumboCard" id={this.props.id}>{this.props.word}</span>
	)}

};

export default WordBJC;