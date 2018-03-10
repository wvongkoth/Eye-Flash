import React, {Component} from "react";
import "./WordJC.css";
import TableJC from '../TableJC';
import axios from "axios";

class WordJC extends Component {

	constructor (props) {
		super(props);
		this.state = {
			firstClick: false
		}
	}

	getImages = (wordId) => {

		axios.get(`/api/getImages/${wordId}`)
        .then((response) => {
        	this.setState({imageArray: response.data})
          console.log(response.data);
        })
        .catch((e) => { 
          console.log(e);
        });
	}

    clickWord = (e) => {
    	console.log(this.props.wordDataId);
  		e.stopPropagation();
  		console.log(e);
	    this.setState({ firstClick: true }, function () {
	        console.log(this.state.firstClick + "console");
	        },
	    );
	    //this.getImages(this.props.wordDataId);
	};

	componentDidMount() {
		this.getImages(this.props.wordDataId);
	}

	render() {
		const {firstClick} = this.state;
		return (
			<span>
				{ firstClick && this.state.imageArray ? 
					<TableJC id={this.props.id} imageArray={this.state.imageArray} image={"https://iconscout.com/iconscout_logo-1024x1024.png"}/> : 
					<span wordDataId={this.props.wordDataId} className="wordFrontJumboCard" id={this.props.id} onClick={this.clickWord}>{this.props.word}</span>
				}
			</span>
	)}

};

export default WordJC;