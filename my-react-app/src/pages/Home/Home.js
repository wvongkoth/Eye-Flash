import React, { Component } from "react";
import JumboCard from "../../components/JumboCard";
import MiniCard from "../../components/MiniCard";
import Form from "../../components/Form";

// class Home extends Component{
// 	constructor(props) {
// 		super(props);
// 			this.state = {
// 				error: null,
// 				isLoaded: false,
// 				decks: []
// 			};
// 	}

//   	componentDidMount() {
// 	    fetch("/api/getAllDecks")
// 	    	.then(res => res.json())
// 	    	.then(
// 	        (result) => {
// 		        this.setState({
// 		            isLoaded: true,
// 		            decks: result.decks
// 				});
// 	   		},
// 	   		(error) => {
// 	   			this.setState({
// 	   				isLoaded: true,
// 	   				error
// 	   			});
// 	   		}
// 	   	)
// 	}	

// 	render(){
// 		return(
// 			<div className = 'container'>
// 				{this.state.decks.map(deck => (
// 					<MiniCard />

// 					))}
// 			</div>
// 		)
// 	}
// }
import WordJC from "../../components/WordJC";
import CreateForm from "../../components/CreateForm";

import array from "../../array.json";

class Home extends Component {

	state = {
		array
	};

	render() {
		return (
			<div className="container">
				{this.state.array.map(array => (
		          <MiniCard
		            id={array.id}
		            word={array.word}
		          />
		        ))}
			</div>
		);
	}
}

}


export default Home;