import React, {Component} from "react";
import "./TableJC.css";

class TableJC extends Component {

    constructor (props) {
        super(props);
        this.state = {
            secondClick: false,
            clickedSrc: ""
        }
    }

    clickTable = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ 
            secondClick: true, 
            clickedSrc: e.target.src
            }, function () {
                console.log(this.state.firstClick + "console");
            },
        );
      };
    render() {
        const {secondClick} = this.state;
        console.log(this.props)
        return (
            <span>
                { secondClick ? 
                    <img alt="chosen option" className="chosenPic" src={this.state.clickedSrc} /> : 
                        <span>
                            <div className="threeByThreeIconGrid">
                                {this.props.imageArray.images.map((img, i) => (
                                    <img alt="option 1" src={img} onClick={this.clickTable} className="imageInGrid"/>
                                )) };
                            </div>
                        </span>
                }
            </span>
        )
    }

};


                        
export default TableJC;