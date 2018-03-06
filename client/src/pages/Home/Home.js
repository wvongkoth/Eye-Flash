import React, { Component } from "react";
import MiniCard from "../../components/MiniCard";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			decks: []
		};
	}

	componentWillMount() {
		// this.callApi()
		// 	.then(res => this.setState({ decks : res.express }))
		// 	.catch(err => console.log(err));

		// fetch('http://localhost:5000/api/getAllDecks')
		//   .then(response => response.json())
		//   .then(data => {
		//     this.setState({ decks: data.decks })
		//     console.log(data.dekcs)
		//   })

		// fetch('http://localhost:5000/api/getAllDecks')
		// 	.then(res => {
		// 		console.log(res.body);
		// 		this.setState({decks: res.body})
		// 		return res.json();
		// 	})
			// .then(decks => {
			// 	console.log(decks);
			// 	this.setState({ decks: decks })
			// });
		fetch('http://localhost:5000/api/getAllDecks')
			.then(res => {
				console.log(res);
				return res.json()
			})
			.then(decks => {
				console.log(decks);
				this.setState({ decks })
			});
	}

	// callApi = async() => {
	// 	const response = await fetch('/api/getAllDecks');
	// 	const body = await response.json();

	// 	if(response.status !== 200) throw Error(body.message);

	// 	return body;
	// };

	render() {
		const decks = this.state;
		return (
			<div className='container'>
				{this.state.decks.map(decks => (
					<MiniCard
						word={decks.deckName}
						id={decks.id}
					/>
				))}
			</div>
		)
	}
}
export default Home;