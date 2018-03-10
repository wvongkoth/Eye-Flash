import React, {Component} from "react";
import axios from "axios";
import "./TableJC.css";

class TableJC extends Component {

    constructor (props) {
        super(props);
        this.state = {
            secondClick: false,
            clickedSrc: "",
            myData: [],
            cardId: ""
        }
    }

    clickTable = e => {
        console.log('I AM ALSO IN HERE, NOT GOOD!');
        e.preventDefault();
        e.stopPropagation();
        this.setState({ 
            secondClick: true, 
            clickedSrc: e.target.src
            }, function () {
            },
        );

        //post the information about the chosen image
        var chosenImageInfo = {
          "cardId": this.props.cardId,
          "word": this.props.wordDataId,
          "image": e.target.src
        };
        console.log(chosenImageInfo);

        axios.post('http://localhost:5000/api/saveImages', chosenImageInfo).then(res => {
            console.log(res);
        });

    };

    render() {
        const {secondClick} = this.state;
        console.log(this.props)
        return (
            <span>
                { secondClick ? 
                    <img cardId={this.props.cardId} wordDataId={this.props.wordDataId} alt="chosen option" className="chosenPic" src={this.state.clickedSrc} /> : 
                        <span>
                            <div cardId={this.props.cardId} wordDataId={this.props.wordDataId} className="threeByThreeIconGrid">
                                {this.props.imageArray.images.map((img, i) => (
                                    <img cardId={this.props.cardId} wordDataId={this.props.wordDataId} alt="option 1" src={img} onClick={this.clickTable} className="imageInGrid"/>
                                )) };
                            </div>
                        </span>
                }
            </span>
        )
    }

};


                        
export default TableJC;