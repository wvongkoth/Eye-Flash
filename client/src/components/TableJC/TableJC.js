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
        return (
            <span>
                { secondClick ? 
                    <img alt="chosen option" className="chosenPic" src={this.state.clickedSrc} /> : 
                        <span>
                            <div className="threeByThreeIconGrid">
                                <img alt="option 1" src={this.props.image} onClick={this.clickTable} className="imageInGrid"/>
                                <img alt="option 2" src={this.props.image} className="imageInGrid" />
                                <img alt="option 3" src={this.props.image} className="imageInGrid"/>
                                <img alt="option 4" src={this.props.image} className="imageInGrid"/>
                                <img alt="option 5" src={this.props.image} className="imageInGrid"/>
                                <img alt="option 6" src={this.props.image} className="imageInGrid"/>
                                <img alt="option 7" src={this.props.image} className="imageInGrid"/>
                                <img alt="option 8" src={this.props.image} className="imageInGrid"/>
                                <img alt="option 9" src={this.props.image} className="imageInGrid"/>
                            </div>
                        </span>
                }
            </span>
        )
    }

};


                        
export default TableJC;