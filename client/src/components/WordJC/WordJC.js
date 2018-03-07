import React, {Component} from "react";
import "./WordJC.css";
import TableJC from '../TableJC';

class WordJC extends Component {

	constructor (props) {
		super(props);
		this.state = {
			firstClick: false
		}
	}

    clickWord=(e)=> {
  		e.stopPropagation();
	    this.setState({ firstClick: true }, function () {
	        console.log(this.state.firstClick + "console");
	        },
	    );
	};

	render() {
		const {firstClick} = this.state;
		return (
			<span>
				{ firstClick ? 
					<TableJC image={"https://iconscout.com/iconscout_logo-1024x1024.png"}/> : 
					<span className="wordJumboCard" id={this.props.id} onClick={this.clickWord}>{this.props.word}</span>
				}
			</span>
	)}

};

export default WordJC;