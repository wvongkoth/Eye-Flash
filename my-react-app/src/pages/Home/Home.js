import React, { Component } from "react";
import JumboCard from "../../components/JumboCard";
import MiniCard from "../../components/MiniCard";
import Form from "../../components/Form";
import MiniCard from "../../components/MiniCard";

<<<<<<< HEAD
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
=======
class Home extends Component{
	constructor(props) {
		super(props);
			this.state = {
				error: null,
				isLoaded: false,
				decks: []
			};
	}

  	componentDidMount() {
	    fetch("/api/getAllDecks")
	    	.then(res => res.json())
	    	.then(
	        (result) => {
		        this.setState({
		            isLoaded: true,
		            decks: result.decks
				});
	   		},
	   		(error) => {
	   			this.setState({
	   				isLoaded: true,
	   				error
	   			});
	   		}
	   	)
	}	

	render(){
		return(
			<div>
				{this.state.decks.map(deck => (
					<MiniCard />

					))}
			</div>
		)
	}

}
>>>>>>> fee6ef17824156b7c1c898d9e95548d4f9399549

export default Home;