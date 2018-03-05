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
                    <img className="chosenPic" src={this.state.clickedSrc} /> : 
                        <span>
                            <div className="threeByThreeIconGrid">
                                <img src={this.props.image} onClick={this.clickTable} className="imageInGrid"/>
                                <img src={this.props.image} className="imageInGrid" />
                                <img src={this.props.image} className="imageInGrid"/>
                                <img src={this.props.image} className="imageInGrid"/>
                                <img src={this.props.image} className="imageInGrid"/>
                                <img src={this.props.image} className="imageInGrid"/>
                                <img src={this.props.image} className="imageInGrid"/>
                                <img src={this.props.image} className="imageInGrid"/>
                                <img src={this.props.image} className="imageInGrid"/>
                            </div>
                        </span>
                }
            </span>
        )
    }

};


                        
export default TableJC;