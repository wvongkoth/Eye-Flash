import React, {Component} from "react";
import "./TableJC.css";

class TableJC extends Component {

    constructor (props) {
        super(props);
        this.state = {
            secondClick: false,
            clickedSrc: "",
            myData: []
        }
    }
    componentWillMount(){

        const myObj = JSON.parse(localStorage.data)
        this.setState({myData: myObj})

        // console.log(this.state.myData)

    }

    clickTable = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ 
            secondClick: true, 
            clickedSrc: e.target.src
            }, function () {
                // console.log(this.state.firstClick + "console");
            },
        );
        console.log(this.myName);
        // const myImageData = this.state.myData;
        // console.log(e.target.id)
        // console.log(myImageData)
        // myImageData.card.cardImages[e.target.id].image = e.target.src;
        // console.log(myImageData)


    };

    render() {
        const {secondClick} = this.state;
        // console.log(this.props)
        return (
            <span>
                { secondClick ? 
                    <img id={this.props.id} alt="chosen option" className="chosenPic" src={this.state.clickedSrc} /> : 
                        <span>
                            <div id={this.props.id} className="threeByThreeIconGrid">
                                {this.props.imageArray.images.map((img, i) => (
                                    <img id={this.props.id} alt="option 1" src={img} onClick={this.clickTable} className="imageInGrid"/>
                                )) };
                            </div>
                        </span>
                }
            </span>
        )
    }

};


                        
export default TableJC;